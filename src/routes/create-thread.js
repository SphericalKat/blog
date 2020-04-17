import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Create from '../components/pages/create-thread/create-thread'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<Create />)
  res.status(200).render('pages/create-thread', { reactApp: reactComp, url: req.app.locals.url })
})

module.exports = router
