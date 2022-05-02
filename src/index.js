import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import GlobalStyle from './assets/GlobalStyle';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);