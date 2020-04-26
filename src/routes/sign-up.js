import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Signup from '../components/pages/signup/signup'
import UserManagementClient from '@c4-smoketrees/user-management-client'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<Signup />)
  res.status(200).render('pages/signup', { reactApp: reactComp })
})

router.post('/', async (req, res) => {
  console.log(req.body)
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
})

module.exports = router
