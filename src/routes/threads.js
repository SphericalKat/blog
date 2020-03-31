import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Threads from '../components/pages/threads/threads'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<Threads />)
  res.status(200).render('pages/threads', { reactApp: reactComp })
})

export default router
