import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import blog from '../components/pages/blog/blog'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<blog/>)
  res.status(200).render('pages/blog', { reactApp: reactComp, url: req.app.locals.url })
})

export default router