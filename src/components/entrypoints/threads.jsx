import React from 'react'

import { hydrate } from 'react-dom'

import Threads from '../pages/threads/threads'

hydrate(<Threads />, document.getElementById('root'))
