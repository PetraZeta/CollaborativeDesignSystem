import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ApolloApp from './apolloClient';
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
  <ApolloApp />
</React.StrictMode>,
  document.getElementById('root')
);
