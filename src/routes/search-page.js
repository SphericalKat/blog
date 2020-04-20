import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import SearchPage from '../components/pages/search-page/search-page'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<SearchPage />)
  res.status(200).render('pages/searchPage', { reactApp: reactComp })
})

module.exports = router
