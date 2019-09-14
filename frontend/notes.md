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

# Estilos Globais
