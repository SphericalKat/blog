import React from 'react'

import { hydrate } from 'react-dom'

import NotFound from '../pages/not-found/not-found'

hydrate(
  <NotFound
    user={window.InitialData.user}
  />,
  document.getElementById('root'))
