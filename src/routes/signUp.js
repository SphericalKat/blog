import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Signup from '../components/pages/signUp/signup'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<Signup />)
  res.status(200).render('pages/signup', { reactApp: reactComp })
})

export default router
