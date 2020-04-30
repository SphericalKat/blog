import React from 'react'

import { hydrate } from 'react-dom'

import BlogEdit from '../pages/blog-edit/blog-edit'

hydrate(
  <BlogEdit
    user={window.InitialData.user}
    blog={window.InitialData.blog}
  />,
  document.getElementById('root'))
