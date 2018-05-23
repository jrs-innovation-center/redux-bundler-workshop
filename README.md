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
