import React from 'react'
import { Cube } from 'styled-loaders-react'

const Page = ({ loading }) =>
  <div>
    {loading
      ? <Cube color='red' size='60px' duration='5s' />
      : 'Your Content'}
  </div>

export default Page
