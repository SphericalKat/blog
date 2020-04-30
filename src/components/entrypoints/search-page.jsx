import React from 'react'

import { hydrate } from 'react-dom'

import SearchPage from '../pages/search-page/search-page'

hydrate(
  <SearchPage
    user={window.InitialData.user}
    query={window.InitialData.query}
  />,
  document.getElementById('root'))
