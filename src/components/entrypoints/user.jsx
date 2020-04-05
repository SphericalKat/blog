import React from 'react'

import { hydrate } from 'react-dom'

import User from '../pages/user/user'

hydrate(<User />, document.getElementById('root'))
