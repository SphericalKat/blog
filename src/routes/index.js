import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Index from '../components/pages/index'
import JwtDecrypt from '../middleware/jwt-decrypt'

const router = express.Router()

router.get('/', JwtDecrypt(false), async (req, res) => {
  if (!req.user) {
    req.user = false
  }
  const reactComp = renderToString(<Index user={req.user} />)
  res.status(200).render('pages/index', { reactApp: reactComp, url: req.app.locals.url, user: req.user })
})

module.exports = router
