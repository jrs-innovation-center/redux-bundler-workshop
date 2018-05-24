import React from 'react'
import getStore from './bundles'
import { Provider } from 'redux-bundler-react'
import Layout from './components/pages/layout'

export default () => (
  <Provider store={getStore({})}>
    <Layout />
  </Provider>
)
