import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import SearchPage from '../components/pages/search-page/search-page'
import BlogClient from '@c4-smoketrees/blog-client'
import JwtDecrypt from '../middleware/jwt-decrypt'

const router = express.Router()

router.get('/', JwtDecrypt(false), async (req, res) => {
  const query = Buffer.from(req.query.q, 'base64').toString('utf-8')

  const reactComp = renderToString(<SearchPage user={req.user} blogs={req.blogs} query={query} />)
  res.status(200).render('pages/search-page', { reactApp: reactComp, user: req.user, query: query })
})

router.get('/search', JwtDecrypt(false), async (req, res) => {
  const query = decodeURIComponent(req.query.q)
  const ld = req.query.ld
  let response
  try {
    response = await BlogClient.search(query, Number(ld), req.jwt)
  } catch (e) {
    res.status(500).json({ status: false })
  }
  res.status(200).json(response)
})

module.exports = router
