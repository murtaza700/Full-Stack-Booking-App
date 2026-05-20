import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ScrollTop from './components/ScrollTop.jsx';
import { store } from '../src/store/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollTop />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);