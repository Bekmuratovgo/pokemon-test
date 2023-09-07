import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import App from './App';
import Router from './Router';
import Header from './components/Header/Header';


const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store} >
      <Header />
      <Router>
        <App />
      </Router>
    </Provider>
  </BrowserRouter >,
);
