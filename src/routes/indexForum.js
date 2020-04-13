import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import IndexForum from '../components/pages/indexForum/indexForum'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<IndexForum />)
  res.status(200).render('pages/indexForum', { reactApp: reactComp, url: req.app.locals.url })
})

export default router
