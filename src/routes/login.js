import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Login from '../components/pages/login'
import UserManagementClient from '@c4-smoketrees/user-management-client'
import JwtDecrypt from '../middleware/jwt-decrypt'
import encrypter from '../middleware/encrypter'

const router = express.Router()

router.get('/', [JwtDecrypt(false)], async (req, res) => {
  if (req.user) {
    res.redirect(process.env.BLOG_FRONTEND_URL)
    return
  }
  const reactComp = renderToString(<Login />)
  res.status(200).render('pages/login', { reactApp: reactComp })
})

router.post('/', async (req, res) => {
  try {
    let redirectPath = `${'http://localhost:3000'}/blogs`
    if (req.query.callback) {
      redirectPath = Buffer.from(req.query.callback, 'base64').toString('ascii')
      console.log(redirectPath)
    }
    const resp = await UserManagementClient.login({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username
    })
    if (resp.status) {
      res.status(200).cookie('c4pin', encrypter.encrypt(resp.token)).redirect(redirectPath)
    } else {
      res.status(200).redirect(`${'http://localhost:3000'}/login?err=1011`)
    }
  } catch (e) {
    if (e.name === 'FetchError') {
      res.redirect(`${'http://localhost:3000'}/login?err=1012`)
    }
  }
})
module.exports = router
