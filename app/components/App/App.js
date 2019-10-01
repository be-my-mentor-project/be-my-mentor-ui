import React, { Suspense } from 'react';

import AnonymousLayout from 'layouts/AnonymousLayout';

import { routerConfig } from './routes';
import Router from '../Router';

function App() {
  return (
    <AnonymousLayout>
      <Suspense fallback={null}>
        <Router routeConfig={routerConfig} />
      </Suspense>
    </AnonymousLayout>
  );
}

export default App;
