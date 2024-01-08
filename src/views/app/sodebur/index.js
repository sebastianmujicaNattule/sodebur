import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Configuracion from './configuracion';

const Feed = React.lazy(() =>
  import(/* webpackChunkName: "sodebur-feed" */ './publicaciones')
);

const Sodebur = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/publicaciones`} />
      <Route
        path={`${match.url}/publicaciones`}
        render={(props) => <Feed {...props} />}
      />
    <Route
        path={`${match.url}/configuracion`}
        render={(props) => <Configuracion {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Sodebur;
