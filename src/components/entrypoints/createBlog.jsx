import React from 'react'

import { hydrate } from 'react-dom'

import CreateBlog from '../pages/createBlog/createBlog'

hydrate(<CreateBlog />, document.getElementById('root'))
