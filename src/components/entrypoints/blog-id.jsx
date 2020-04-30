import React from 'react'

import { hydrate } from 'react-dom'

import BlogId from '../pages/blog-id/blog-id'

hydrate(
  <BlogId
    user={window.InitialData.user}
    blog={window.InitialData.blog}
  />,
  document.getElementById('root'))
