import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import CreateBlog from '../components/pages/createBlog/createBlog'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<CreateBlog/>)
  res.status(200).render('pages/createBlog', { reactApp: reactComp, url: req.app.locals.url })
})

export default router