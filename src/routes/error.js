import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Error from '../components/pages/error/error'
import JwtDecrypt from '../middleware/jwt-decrypt'

const router = express.Router()

router.get('/', JwtDecrypt(false), async (req, res) => {
  if (!req.user) {
    req.user = false
  }
  const reactComp = renderToString(<Error user={req.user} />)
  res.status(200).render('pages/error', { reactApp: reactComp, user: req.user })
})

module.exports = router
