import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ToastProvider } from '../../src';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider autoClose={true} duration={5000}>
      <App />
    </ToastProvider>
  </StrictMode>,
);
