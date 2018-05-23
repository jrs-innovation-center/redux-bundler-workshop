import React from 'react'

import { connect } from 'redux-bundler-react'

const Layout = ({route}) => {
  const Page = route 
  return (
    <Page />
  )
}

export default connect('selectRoute', Layout)
