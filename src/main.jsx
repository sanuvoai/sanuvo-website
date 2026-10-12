import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';
import './styles/sections.css';
import './styles/previews.css';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Hydrate only when the server-rendered markup is for this exact route. In dev, and when
// a host serves a fallback page for an unknown URL, render from scratch instead.
const normalize = (path) => path.replace(/\/+$/, '') || '/';
const prerendered = container.dataset.prerendered;

if (prerendered && normalize(prerendered) === normalize(window.location.pathname)) {
  hydrateRoot(container, app);
} else {
  container.innerHTML = '';
  createRoot(container).render(app);
}
