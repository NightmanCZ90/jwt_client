import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './components/App';
import Welcome from './components/Welcome';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" exact element={<Welcome />} />
      </Routes>
    </App>
  </BrowserRouter>
  , document.querySelector('#root'));