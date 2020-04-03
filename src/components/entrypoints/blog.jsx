import React from 'react'

import { hydrate } from 'react-dom'

import Blog from '../pages/blog/blog'

hydrate(<Blog />, document.getElementById('root'))
