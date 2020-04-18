import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Login from '../components/pages/login'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<Login />)
  res.status(200).render('pages/login', { reactApp: reactComp })
})

module.exports = router
