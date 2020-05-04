import express from 'express'
import JwtDecrypt from '../middleware/jwt-decrypt'

const router = express.Router()

router.get('/', JwtDecrypt(true), async (req, res) => {
  res.clearCookie('c4pin').redirect(process.env.BLOG_FRONTEND_URL)
})

module.exports = router
