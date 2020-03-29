import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../components/pages/home/home'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<Home/>)
  res.status(200).render('pages/home', { reactApp: reactComp, url: req.app.locals.url })
})

export default router
margin: 0;