import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Signup from '../components/pages/signup/signup'
import UserManagementClient from '@c4-smoketrees/user-management-client'
import multer from 'multer'
import JwtDecrypt from '../middleware/jwt-decrypt'
import s3 from '../middleware/s3'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const router = express.Router()

router.get('/', [JwtDecrypt(false)], async (req, res) => {
  if (req.user) {
    res.redirect(process.env.BLOG_FRONTEND_URL)
    return
  }
  const reactComp = renderToString(<Signup/>)
  res.status(200).render('pages/signup', { reactApp: reactComp })
})

router.post('/', upload.single('propic'), async (req, res) => {
  try {
    s3.upload({
      Bucket: 'blogcontent',
      ContentType: 'image/*',
      Body: req.file.buffer,
      ACL: 'public-read',
      Key: req.body.email
    }, async function (error, data) {
      if (error) {
        console.error(error)
        res.redirect(`${'http://localhost:3000'}/error`)
      }
      const resp = await UserManagementClient.signup({
        username: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        profilePicture: `${'https://blogcontent.sgp1.cdn.digitaloceanspaces.com'}/${req.body.email}`
      })

      if (resp.status) {
        res.redirect(`${'http://localhost:3000'}/login`)
      } else {
        res.redirect(`${'http://localhost:3000'}/login?err=1010`)
      }
    })

  } catch (e) {
    if (e.name === 'FetchError') {
      res.redirect(`${'http://localhost:3000'}/login?err=1012`)
    }
  }
})

module.exports = router
