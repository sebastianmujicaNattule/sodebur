import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Feed = React.lazy(() =>
  import(/* webpackChunkName: "forms-components" */ './feed')
);
const Publicar = React.lazy(() =>
  import(/* webpackChunkName: "forms-components" */ './crear-publicacion')
);
const Publicaciones = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/feed`} />
      <Route
        path={`${match.url}/feed`}
        render={(props) => <Feed {...props} />}
      />
      <Route
        path={`${match.url}/publicar`}
        render={(props) => <Publicar {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Publicaciones;
