import React from 'react'

import { hydrate } from 'react-dom'

import SearchPage from '../pages/search-page/search-page'

hydrate(<SearchPage />, document.getElementById('root'))
