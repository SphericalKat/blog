import { Router } from 'express'
import { renderToString } from 'react-dom/server'
import React from 'react'
import JwtDecrypt from '../middleware/jwt-decrypt'
import BlogId from '../components/pages/blog-id/blog-id'
import BlogClient from '@c4-smoketrees/blog-client'
import BlogEdit from '../components/pages/blog-edit/blog-edit'

const router = Router()

router.get('/:blogId', JwtDecrypt(true), async (req, res) => {
  let blog
  try {
    const response = await BlogClient.getOneBlog(req.params.blogId, req.jwt)
    blog = response.blog
    console.log(blog)
  } catch (e) {
  }
  const reactComp = renderToString(<BlogId user={req.user} blog={blog} />)
  res.status(200).render('pages/blog-id', {
    reactApp: reactComp,
    url: req.app.locals.url,
    user: req.user,
    blog: blog
  })
})

router.get('/:blogId/edit', JwtDecrypt(true), async (req, res) => {
  let blog
  try {
    const response = await BlogClient.getOneBlog(req.params.blogId, req.jwt)
    blog = response.blog
    console.log(blog)
    // if (blog.authorId !== req.user._id) {
    //   res.redirect('http://google.com')
    //   return
    // }
  } catch (e) {
  }
  const reactComp = renderToString(<BlogEdit user={req.user} blog={blog} />)
  res.status(200).render('pages/blog-edit', {
    reactApp: reactComp,
    url: req.app.locals.url,
    user: req.user,
    blog: blog
  })
})

router.post('/:blogId/edit', JwtDecrypt(true), async (req, res) => {
  try {
    console.log(req.body)
    const response = await BlogClient.updateBlog(req.params.blogId, req.body, req.jwt)
    console.log(response)
    res.status(200).json(response)
  } catch (e) {
    console.log(e)
    res.status(500).json({ status: false })
  }
})
module.exports = router
