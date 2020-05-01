import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import NotFound from '../components/pages/not-found/not-found'
import JwtDecrypt from '../middleware/jwt-decrypt'

const router = express.Router()

router.get('/', JwtDecrypt(false), async (req, res) => {
  if (!req.user) {
    req.user = false
  }
  const reactComp = renderToString(<NotFound user={req.user} />)
  res.status(200).render('pages/not-found', { reactApp: reactComp, user: req.user })
})

module.exports = router
