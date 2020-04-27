import React from 'react'

import { hydrate } from 'react-dom'

import Index from '../pages/index/index'

hydrate(<Index user={window.InitialData.user} />, document.getElementById('root'))
