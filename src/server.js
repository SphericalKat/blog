import express from 'express'
import compression from 'compression'
import index from './routes/index'
import home from './routes/home'
import signup from './routes/signUp'
import threadsblogs from './routes/threadsblogs'
import threads from './routes/threads'
import path from 'path'

// Server var
const app = express()

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//set url
app.locals.url = 'http://localhost:3000'

// Middleware
app.use(compression())
console.log(__dirname)
app.use(express.static(__dirname + '/public'))

// Routes
app.use('/', index)
app.use('/home', home)
app.use('/signup', signup)
app.use('/threadsblogs',threadsblogs)
app.use('/threads',threads)

const port = process.env.PORT || 3000

app.listen(port, function listenHandler () {
  console.info(`Running on ${port}`)
})
