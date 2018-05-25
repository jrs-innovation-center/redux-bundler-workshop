import { composeBundles } from 'redux-bundler'
import routes from './routes'
import extras from './extras'
//import articles from './articles'
import articles from './articles2'

export default composeBundles(routes, articles, extras)
