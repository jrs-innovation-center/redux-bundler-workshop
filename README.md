# Redux Bundle Workshop

This workshop is about ReduxBundler a concept on how to create reusable packages/bundles of redux functions.

## Why

Redux is really powerful and can ge a game changer on how your manage your
state, but it also requires a lot of pieces to the puzzle, so often times it
can become a real challenge to figure out the perfect strategy for code
organization.

Redux Bundler gives you a pattern that is lightweight and has very few concepts to learn you can actually remove some concepts from the process.

---

## Demo

In this demo, we will create a redux bundler app using the news api.

```sh
create-react-app newsy
cd newsy
yarn add redux-bundler
mkdir src/bundles
mkdir src/components
touch src/bundles/index.js
```

> Create a new bundles folder and index.js file

```js
import { composeBundles } from 'redux-bundler'

export default composeBundles()
```

> We get a couple of bundles for free:

* debug
* appIdle

Lets go ahead an add redux bundler to our app

Modify src/App.js

```js
import React, { Component } from 'react'
import getStore from './bundles'
import { Provider } from 'redux-bundler-react'

class App extends Component {
  render() {
    return (
      <Provider store={getStore({})}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    )
  }
}

export default App
```

Add the getStore function from our bundle index
and the Provider from the redux-bundler-react module

---

[show the debugging bundle and the appTime bundle]

---

Lets add some built-in bundles

### Routing

This bundle pushes routing through redux and have some really nice advantages over react-router, but bundles can work with react-router too.

create route.js bundle

```js
import { createRouteBundle } from 'redux-bundler'

import Home from '../components/pages/home'
import About from '../components/pages/about'

export default createRouteBundle({
  '/': Home,
  '/about': About
})
```

add bundle to composeBundles in index.js

```
import { composeBundles } from 'redux-bundler'
import routes from './routes'


export default composeBundles(
  routes
)
```

Refactor App.js to connect to Layout Component

```js
import React, { Component } from 'react'
import getStore from './bundles'
import { Provider } from 'redux-bundler-react'
import Layout from './components/pages/layout'

export default () => (
  <Provider store={getStore({})}>
    <Layout />
  </Provider>
)
```

In the layout component use a selector get the current route.

'src/components/pages/layout.js'

```js
import React from 'react'

import { connect } from 'redux-bundler-react'

const Layout = ({ route }) => {
  const Page = route
  return <Page />
}

export default connect('selectRoute', Layout)
```

> Internal Nav Helper

This handy little helper lets you just write anchor links like normal and it will figure our if it is internal or external and do the right thing...

> You will also notice we bring in doUpdateUrl, this is an action creator for routes.

```js
import React from 'react'
import navHelper from 'internal-nav-helper'

import { connect } from 'redux-bundler-react'

const Layout = ({ route }) => {
  const Page = route
  return (
    <main onClick={navHelper(doUpdateUrl)}>
      <Page />
    </main>
  )
}

export default connect('selectRoute', 'doUpdateUrl', Layout)
```

---

Extras

Redux Bundler has a feature where you can add extras to the action creator argument list:

bundles/extra.js

```js
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
```

---

So lets create an Articles Bundle

bundles/articles

```js
export default {
  name: 'articles',

  doFetchArticles: () => ({ dispatch, apiFetch }) => {
    dispatch({ type: 'FETCH_ARTICLES_START' })
    apiFetch('everything?q=tech').then(payload => {
      dispatch({ type: 'FETCH_ARTICLES_SUCCESS', payload })
    })
  }
}
```

> So we need to add a reducer to add the dat to state

```js
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
}
```

> Finally we want to create a couple of selectors to get the data out

```js
// selectors start at the beginning of state
selectArticlesRaw: state => state.articles,
selectArticles: state => state.articles.data
```

---

Reactors

```js
reactShouldFetchArticles: createSelector('selectArticlesRaw', articleData => {
  if (articleData.loading || articleData.data) {
    return false
  }
  return { actionCreator: 'doFetchArticles' }
})
```

---

AsyncResourceBundle

```js
import { createAsyncResourceBundle } from 'redux-bundler'
import { prop } from 'ramda'

const articles = createAsyncResourceBundle({
  name: 'articles2',
  getPromise: ({ apiFetch }) =>
    apiFetch('everything?q=tech').then(prop('articles'))
})

articles.reactShouldFetchArticles = createSelector(
  'selectArticlesRaw',
  articleData => {
    if (articleData.loading || articleData.data) {
      return false
    }
    return { actionCreator: 'doFetchArticles' }
  }
)

export default articles
```

---

TODO: Caching

utils/cache.js

```js
import { getConfiguredCache } from 'money-clip'

// This just creates a cache helper that is pre-configured
// these options.
// The version number should come from a config, this protects
// from trying load cached data when the internal data structures
// that your app expects have changed.
//
// Additionally, if you're caching user-specific data, you should build a
// version string that includes some user identifier along with your actual
// version number. This will ensure tha switching users won't result in
// someone loading someone else's cached data.
//
// So, there are gotchas, but it sure is cool when you've got it all set up.
export default getConfiguredCache({
  maxAge: 1000 * 60 * 60,
  version: 1
})
```

> cache bundle example

```js
import { composeBundles, createCacheBundle } from 'redux-bundler'
import routes from './routes'
import baseData from './base-data'
import people from './people'
import extraArgs from './extra-args'
import cache from '../utils/cache'

export default composeBundles(
  routes,
  baseData,
  people,
  createCacheBundle(cache.set),
  extraArgs
)
```
