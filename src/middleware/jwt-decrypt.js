import encrypter from './encrypter'
import jwt from 'jsonwebtoken'
import logger from '../logging/logger'

const JwtDecrypt = function (redirect) {
  if (redirect) {
    return function (req, res, next) {
      const path = req.originalUrl
      const buffer = Buffer.from(`${process.env.BLOG_FRONTEND_URL}${path}`)
      try {
        const token = encrypter.decrypt(req.cookies.c4pin)
        req.user = jwt.verify(token, process.env.JWTSECRET)
        req.jwt = token
      } catch (e) {
        console.error('Invalid JWT token')
        res.redirect(`${process.env.BLOG_FRONTEND_URL}/login?callback=${buffer.toString('base64')}`)
        return
      }
      next()
    }
  } else {
    return function (req, res, next) {
      try {
        const token = encrypter.decrypt(req.cookies.c4pin)
        req.user = jwt.verify(token, process.env.JWTSECRET)
        req.jwt = token
      } catch (e) {
        logger.warn("Invalid JWT token")
      }
      next()
    }
  }
}

export default JwtDecrypt
