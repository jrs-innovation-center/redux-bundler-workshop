import { createAsyncResourceBundle } from 'redux-bundler'
import { prop } from 'ramda'
let articles = createAsyncResourceBundle({
  name: 'articles',
  getPromise: ({ apiFetch }) =>
    apiFetch('everything?q=tech').then(prop('articles'))
})

articles.doSearchNews = query => {
  return async ({ dispatch, apiFetch }) => {
    dispatch({ type: 'ARTICLES_FETCH_STARTED' })
    let payload = await apiFetch('everything?q=' + query).then(prop('articles'))
    dispatch({ type: 'ARTICLES_FETCH_FINISHED', payload })
  }
}

export default articles
