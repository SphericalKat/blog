import React from 'react'

import { hydrate } from 'react-dom'

import IndexBlog from '../pages/indexBlog/indexBlog.jsx'

hydrate(<IndexBlog />, document.getElementById('root'))
