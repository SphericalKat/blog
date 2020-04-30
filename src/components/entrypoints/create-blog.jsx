import React from 'react'

import { hydrate } from 'react-dom'

import CreateBlog from '../pages/create-blog/create-blog.jsx'

hydrate(
  <CreateBlog
    user={window.InitialData.user}
    blog={window.InitialData.blog}
  />, document.getElementById('root'))
