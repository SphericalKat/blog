import express from 'express'
import compression from 'compression'
import index from './routes/index'
import home from './routes/home'
import signup from './routes/signUp'
import create from './routes/create'
import blog from './routes/blog'
import createBlog from './routes/createBlog'
import path from 'path'

// Server var
const app = express()

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// set url
app.locals.url = 'http://localhost:3000'

// Middleware
app.use(compression())

app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', index)
app.use('/home', home)
app.use('/signup', signup)
app.use('/create', create)
app.use('/blog', blog)
app.use('/createBlog', createBlog)

const port = process.env.PORT || 3000

app.listen(port, function listenHandler () {
  console.info(`Running on ${port}`)
})
