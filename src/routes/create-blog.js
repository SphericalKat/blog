import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import CreateBlog from '../components/pages/create-blog/create-blog'
import JwtDecrypt from '../middleware/jwt-decrypt'
import BlogClient from '@c4-smoketrees/blog-client'

const router = express.Router()

router.get('/', JwtDecrypt(true), async (req, res) => {
  const draftId = req.query.did
  let blog = {}
  if (draftId) {
    try {
      const response = await BlogClient.getOneDraft(draftId, req.jwt)
      blog = response.draft
      console.log(response)
    } catch (e) {

    }
  }
  const reactComp = renderToString(<CreateBlog user={req.user} blog={blog} />)
  res.status(200).render('pages/create-blog', {
    reactApp: reactComp,
    url: req.app.locals.url,
    user: req.user,
    blog: blog
  })
})

router.post('/', JwtDecrypt(true), async (req, res) => {
  const draft = req.body.draft
  const action = req.body.action
  console.log(req.body)
  if (action === 'save') {
    if (draft.draftId) {
      try {
        const response = await BlogClient.updateDraft(draft.draftId, draft, req.jwt)
        if (response.status) {
          res.status(200).json(response)
          return
        }
        res.status(200).json(response)
      } catch (e) {
        // TODO
      }
    } else {
      try {
        const response = await BlogClient.newDraft(draft.content, draft.title, draft.tags, draft.coverImage, req.jwt)
        if (response.status) {
          res.status(200).json(response)
          return
        }
        res.status(200).json(response)
      } catch (e) {
        // TODO
      }
    }
  } else if (action === 'publish') {
    if (draft.draftId) {
      try {
        const response = await BlogClient.publishDraft(draft.draftId, req.jwt)
        if (response.status) {
          res.status(200).json(response)
          return
        }
        res.status(500).json(response)
      } catch (e) {
        // TODO
      }
    } else {
      try {
        const response = await BlogClient.newDraft(draft.content, draft.title, draft.tags, draft.coverImage, req.jwt)
        console.log(response)
        if (response.status) {
          const response1 = await BlogClient.publishDraft(response.draftId, req.jwt)
          if (response1.status) {
            res.status(200).json(response1)
            return
          }
        }
        res.status(500).json(response)
      } catch (e) {
        // TODO
      }
    }
  }
})

module.exports = router
