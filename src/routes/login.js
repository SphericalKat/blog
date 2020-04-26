import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Login from '../components/pages/login'
import UserManagementClient from '@c4-smoketrees/user-management-client'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<Login />)
  res.status(200).render('pages/login', { reactApp: reactComp })
})

router.post('/', async (req, res) => {
  const resp = await UserManagementClient.login({
    email: req.body.email,
    password: req.body.password,
    username: req.body.username
  })
  if (resp.status) {
    res.status(200).cookie('c4pin', resp.token).redirect(`${'http://localhost:3000'}/blogs`)
  } else {
    res.status(200).redirect(`${'http://localhost:3000'}/login?err=1011`)
  }
})
module.exports = router
