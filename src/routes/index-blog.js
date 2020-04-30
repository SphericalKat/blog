import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import IndexBlog from '../components/pages/index-blog/index-blog'
import JwtDecrypt from '../middleware/jwt-decrypt'
import BlogClient from '@c4-smoketrees/blog-client'

const router = express.Router()

router.get('/', [JwtDecrypt(false)], async (req, res) => {
  const user = req.user || false
  let blogs
  try {
    const response = await BlogClient.getAllBlog()
    blogs = response.blogs
  } catch (e) {
    res.redirect(`${process.env.BLOG_FRONTEND_URL}/error`)
    return
  }
  const reactComp = renderToString(<IndexBlog user={user} blogs={blogs} />)
  res.status(200).render('pages/index-blog', {
    reactApp: reactComp,
    url: req.app.locals.url,
    user: user,
    blogs: blogs
  })
})

module.exports = router
