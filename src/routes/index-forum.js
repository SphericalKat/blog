import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import IndexForum from '../components/pages/index-forum/index-forum'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<IndexForum />)
  res.status(200).render('pages/index-forum', { reactApp: reactComp, url: req.app.locals.url })
})

module.exports = router
