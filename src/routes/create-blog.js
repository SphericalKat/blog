import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import CreateBlog from '../components/pages/create-blog/create-blog'
import JwtDecrypt from '../middleware/jwt-decrypt'

const router = express.Router()

router.get('/', JwtDecrypt(true), async (req, res) => {
  const reactComp = renderToString(<CreateBlog />)
  res.status(200).render('pages/create-blog', {
    reactApp: reactComp,
    url: req.app.locals.url,
    user: req.user
  })
})

module.exports = router
