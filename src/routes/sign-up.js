import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Signup from '../components/pages/signup/signup'
import UserManagementClient from '@c4-smoketrees/user-management-client'
import JwtDecrypt from '../middleware/jwt-decrypt'

const router = express.Router()

router.get('/', [JwtDecrypt(false)], async (req, res) => {
  if (req.user) {
    req.redirect(process.env.BLOG_FRONTEND_URL)
    return
  }
  const reactComp = renderToString(<Signup />)
  res.status(200).render('pages/signup', { reactApp: reactComp })
})

router.post('/', async (req, res) => {
  try {
    const resp = await UserManagementClient.signup({
      username: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })
    if (resp.status) {
      res.redirect(`${'http://localhost:3000'}/login`)
    } else {
      res.redirect(`${'http://localhost:3000'}/login?err=1010`)
    }
  } catch (e) {
    if (e.name === 'FetchError') {
      res.redirect(`${'http://localhost:3000'}/login?err=1012`)
    }
  }
})

module.exports = router
