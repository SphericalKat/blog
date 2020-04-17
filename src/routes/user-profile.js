import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../components/pages/user-profile/user-profile'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<Home/>)
  res.status(200).render('pages/user-profile', { reactApp: reactComp, url: req.app.locals.url })
})

module.exports = router
