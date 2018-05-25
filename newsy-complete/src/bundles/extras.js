/* global fetch */
const NEWSURL = 'https://newsapi.org/v2'
const APIKEY = process.env.REACT_APP_NEWS_APIKEY

export default {
  name: 'extras',
  getExtraArgs: store => {
    return {
      apiFetch(path) {
        return fetch(`${NEWSURL}/${path}`, {
          headers: {
            authorization: `Bearer ${APIKEY}`
          }
        })
          .then(res => res.json())
          .catch(err => {
            console.log('ERROR:', err)
            throw err
          })
      }
    }
  }
}
