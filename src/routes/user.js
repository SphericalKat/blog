import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<blog />)
  res.status(200).render('pages/user', { reactApp: reactComp, url: req.app.locals.url })
})

export default router
