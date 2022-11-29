import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const Root = document.getElementById('root');
const root = createRoot(Root);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
