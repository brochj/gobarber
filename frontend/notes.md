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
