import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import CreateBlog from '../components/pages/create-blog/create-blog'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<CreateBlog/>)
  res.status(200).render('pages/create-blog', { reactApp: reactComp, url: req.app.locals.url })
})

module.exports = router
