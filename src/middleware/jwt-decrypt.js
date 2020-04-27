import encrypter from './encrypter'
import jwt from 'jsonwebtoken'

const JwtDecrypt = function (redirect) {
  if (redirect) {
    return function (req, res, next) {
      try {
        const token = encrypter.decrypt(req.cookies.c4pin)
        req.user = jwt.verify(token, process.env.JWTSECRET)
      } catch (e) {
        console.error('Invalid JWT token')
        res.redirect(`${process.env.BLOG_FRONTEND_URL}/login`)
      }
      next()
    }
  } else {
    return function (req, res, next) {
      try {
        const token = encrypter.decrypt(req.cookies.c4pin)
        req.user = jwt.verify(token, process.env.JWTSECRET)
      } catch (e) {
        console.error('Invalid JWT token')
      }
      next()
    }
  }
}

export default JwtDecrypt
