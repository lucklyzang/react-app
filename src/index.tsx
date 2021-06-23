import React, { Suspense } from 'react'
//初始化样式
import '@/common/stylus/index.scss'
import 'lib-flexible'
import ReactDOM from 'react-dom'
import App from './App'
import stores from "./stores/index";
import { configure } from "mobx";
import { Provider } from 'mobx-react';
import { Route, Switch, HashRouter} from 'react-router-dom'
ReactDOM.render(
  <HashRouter>
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route path="/" render={routerProps => {
          return <Provider {...stores}>
              <App {...routerProps}/>
            </Provider>
        }}/>
      </Switch>
    </Suspense>
  </HashRouter>,
  document.getElementById('root')
);
configure({
  enforceActions: "observed"
});
