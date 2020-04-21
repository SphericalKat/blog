import React from 'react'

import { hydrate } from 'react-dom'

import PostForum from '../pages/post-forum/post-forum.jsx'

hydrate(<PostForum />, document.getElementById('root'))
