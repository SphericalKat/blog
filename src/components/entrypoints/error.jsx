import React from 'react'

import { hydrate } from 'react-dom'

import Error from '../pages/error/error'

hydrate(
  <Error
    user={window.InitialData.user}
  />,
  document.getElementById('root'))
