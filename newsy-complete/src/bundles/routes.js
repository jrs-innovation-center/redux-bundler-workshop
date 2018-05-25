import { createRouteBundle } from 'redux-bundler'

import Home from '../components/pages/home'
import About from '../components/pages/about'

export default createRouteBundle({
  '/': Home,
  '/about': About
})
