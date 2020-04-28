import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import IndexBlog from '../components/pages/index-blog/index-blog'
import JwtDecrypt from '../middleware/jwt-decrypt'
import UserManagementClient from '@c4-smoketrees/user-management-client'
import BlogClient from '@c4-smoketrees/blog-client'

const router = express.Router()

router.get('/', [JwtDecrypt(false)], async (req, res) => {
  let user = null
  let blogs
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
  try {
    const response = await BlogClient.getAllBlog()
    blogs = response.blogs
  } catch (e) {
    console.log(e)
    res.redirect(`${process.env.BLOG_FRONTEND_URL}`)
    return
  }
  const reactComp = renderToString(<IndexBlog user={user} blogs={blogs} />)
  console.log(user)
  res.status(200).render('pages/index-blog', {
    reactApp: reactComp,
    url: req.app.locals.url,
    user: user,
    blogs: blogs
  })
})

module.exports = router
