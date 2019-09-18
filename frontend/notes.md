# Reactotron no ReactJS

```bash
yarn add reactotron-react-js
```

## Estrutura
```
├── src
│   ├── App.js
│   ├── config
│   │   └── ReactotronConfig.js
│   ├── index.js
```

## ReacotoronConfig.js

```js
import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().connect();

  tron.clear();
  console.tron = tron;
}
```

## Utilizando
- Fazer o import do Reactotron no arquivo de entrada do app `src/index.js`

```js
import "./config/ReactotronConfig";
```

- Para utilizar é apenas um

```js
console.tron.log("Mensagem");
```


# Rotas Privadas
Para ter controle das rotas privadas vamos criar um componente próprio chamado `Route`.
- Em `src/routes/Route.js`

```js
// src/routes/Route.js
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
};
```

- Em `src/routes/index.js` não utilizaremos o `Route` do `react-router-dom` e sim o componente `Route` que foi criado.
- Como foi criado a prop `isPrivate`, podemos definir quais rotas serão privadas passando apenas essa prop.

```js
import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={() => <h1>404 Page Not Found</h1>} />
    </Switch>
  );
}
```

# Layouts por página
- Quando se tem páginas muitos parecidas, como uma tela de login e de cadastro, é interessante criar layouts

## Estrutura
- Em pages criar a pasta `_layouts`

```
├── pages
│   │   ├── Dashboard
│   │   │   └── index.js
│   │   ├── _layouts
│   │   │   ├── auth
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   └── default
│   │   │       ├── index.js
│   │   │       └── styles.js
```

- Os arquivos de layout terão esse formato

```js
import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
```

## Routes.js

- Em `routes/Route.js` podemos definir as condições de exibição do layout. Por exemplo, se o usuário estiver logado mostra um layout, se não mostra outro.

```js
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
  // Forma sem o layouts
  //return <Route {...rest} component={Component} />;

}


```

# Root Import

- Com o comando `npx create-react-app` não temos acesso as configurações do babel e webpack. Para ter acesso vamos instalar

```bash
yarn add customize-cra react-app-rewired -D
```


- Instalar o plugin do babel

```bash
yarn add babel-plugin-root-import -D
```

- Na raiz do Projeto criar um arquivo chamado `config-overrides.js`. Esse arquivo de configuração será carregado pelo `react-app-rewired` quando utilizarmos os scripts de `start`, `build` e `test`.

```js
// /config-overrides.js
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);

```

- No `package.json` trocar os scripts de `start`, `build` e `test` por

```json
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```

## Utilizando
- Neste momento já será possível fazer o import da seqguinte maneira

```js
// Modo antigo
import AuthLayout from '../pages/_layouts/auth';
// Modo com babel-plugin-root-import
import AuthLayout from '~/pages/_layouts/auth';
```

- o `~` representa a pasta `src`, que foi definido em `rootPathSuffix: 'src'`

## Configurando o ESLint
- Adicionar

```bash
yarn add eslint-import-resolver-babel-plugin-root-import -D
```
- No arquivo `.eslintrc` lá no final, adicionar as `settings`.

```js
rules: {
    ( ... )
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      },
    },
  },
```

## Configurando acesso ao arquivos
- Com passo realizado acima, provavelmente no VSCode não estará funcionando a questão de segurar o `Ctrl` e clicar em cima do caminho do arquivo para abrí-lo

```js
import AuthLayout from '~/pages/_layouts/auth';
```
- Para arrumar, criar um arquivo na pasta raiz `jsconfig.json`

```json
// /jsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}
```



# // TODO fazer o tutorial de redux + redux-saga  da aula "configurando store" do modulo gobarber web

# Autenticação com redux-saga

# Persistindo dados

```bash
yarn add redux-persist
```

- Em `store/persistReducers.js`

```js
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
```

- O `whitelist` é quais reducer que ficarão armazenados
- O `storage` lida com o seleciona o sotrage de forma automatica. Exemplo, se a aplicação for web, será salve no `localStorage` e se for no react-native será salvo no `AsyncStorage`.


- Em `store/index.js`
```js
import { persistStore } from 'redux-persist'; // ADD
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistedReducers from './persistReducers'; // ADD

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const middlewares = [sagaMiddleware];

const store = createStore(persistedReducers(rootReducer), middlewares); //MOD
const persistor = persistStore(store); //ADD

sagaMiddleware.run(rootSaga);

export { store, persistor }; // MOD
```

- Em `App.js` e `Route.js` mudar o import de store para

```js
import { store } from './store';

```

- Em `App.js`
- O `PersistGate` irá verificar os o reducer que estão salvos no local storage da aplicação, pegar os dados.

```js
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'; //ADD
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import { store, persistor } from './store'; // MOD

import Routes from './routes';
import history from './services/history';

export default function src() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}> {/* ADD */}
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </PersistGate> {/* ADD */}
    </Provider>
  );
}

```
