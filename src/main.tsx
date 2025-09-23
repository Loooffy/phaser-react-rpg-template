import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Menu from './components/Menu';
import PhaserGame from './PhaserGame';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PhaserGame />
    <Menu />
  </React.StrictMode>,
);
