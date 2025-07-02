import React from 'react';
import { AppRouter } from './routes';
import { ErrorBoundary } from './components';

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App
