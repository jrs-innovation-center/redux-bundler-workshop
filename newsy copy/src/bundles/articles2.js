import { createAsyncResourceBundle } from 'redux-bundler'
import { prop } from 'ramda'
export default createAsyncResourceBundle({
  name: 'articles2',
  getPromise: ({ apiFetch }) =>
    apiFetch('everything?q=tech').then(prop('articles'))
})
