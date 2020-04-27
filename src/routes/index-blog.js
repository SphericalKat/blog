import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import IndexBlog from '../components/pages/index-blog/index-blog'
import JwtDecrypt from '../middleware/jwt-decrypt'
import UserManagementClient from '@c4-smoketrees/user-management-client'

const router = express.Router()

router.get('/', [JwtDecrypt(false)], async (req, res) => {
  let user
  if (req.user) {
    try {
      const response = await UserManagementClient.details({ _id: req.user._id })
      if (response.status) {
        user = response.user
      }
    } catch (e) {
      user = req.user
    }
  }
  const reactComp = renderToString(<IndexBlog user={user} />)
  res.status(200).render('pages/index-blog', { reactApp: reactComp, url: req.app.locals.url, user: user })
})

module.exports = router
