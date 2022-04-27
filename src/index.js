import React from 'react';
import { createRoot } from 'react-dom/client';
import Routing from './routes/Routing';
import { BrowserRouter } from 'react-router-dom';

//STYLE
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter >
    <Routing />
  </BrowserRouter>
);

