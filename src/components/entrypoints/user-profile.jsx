import React from 'react'

import { hydrate } from 'react-dom'

import UserProfile from '../pages/user-profile/user-profile'

hydrate(<UserProfile/>, document.getElementById('root'))
