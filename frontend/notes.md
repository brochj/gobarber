# Configurando rotas com history

## Estrutura
```
├── src
│   ├── App.js
│   ├── index.js
│   ├── pages
│   │   ├── Dashboard
│   │   │   └── index.js
│   │   ├── Profile
│   │   │   └── index.js
│   │   ├── SignIn
│   │   │   └── index.js
│   │   └── SignUp
│   │       └── index.js
│   ├── routes
│   │   └── index.js
│   └── services
│       └── history.js
```

## Dependências
```bash
yarn add history react-router-dom
```

## history.js

```js
// history.js
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default history;
```
## routes/index.js

```js
// routes/index.js
import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

export default function src() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}
```

## app.js

```js
// app.js
import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

export default function src() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}
```

