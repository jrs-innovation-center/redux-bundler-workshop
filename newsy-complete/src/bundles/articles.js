import { merge } from 'ramda'

export default {
  name: 'articles',

  getReducer: () => {
    const initialData = {
      data: null,
      loading: false
    }

    return (state = initialData, { type, payload }) => {
      if (type === 'FETCH_ARTICLES_START') {
        return merge(state, { loading: true })
      }

      if (type === 'FETCH_ARTICLES_SUCCESS') {
        return merge(state, {
          loading: false,
          data: payload.articles
        })
      }
      return state
    }
  },
  doFetchArticles: () => ({ dispatch, apiFetch }) => {
    dispatch({ type: 'FETCH_ARTICLES_START' })
    apiFetch('everything?q=tech').then(payload => {
      dispatch({ type: 'FETCH_ARTICLES_SUCCESS', payload })
    })
  },
  // selectros start at the beginning of state
  selectArticlesRaw: state => state.articles,
  selectArticles: state => state.articles.data
}
