import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginComponent from './components/LoginComponent';
import DataBindingComponent from './components/DataBindingComponent';
import DataBindingComponent1 from './components/DataBindingComponent1';
import DataBindingState from'./components/DataBindingState';
import DataBindingComponent2 from './components/DataBindingComponent2';
import ProductComponent from './components/ProductComponent';
import ProductComponent1 from './components/ProductComponent1';
import FetchDemoComponent from './components/FetchDemoComponent';
import FormComponent from './components/FormComponent';
import FormikComponent from './components/FormikComponent';
import FormikValidation from './components/FormikValidation';

ReactDOM.render(
  <React.StrictMode>
    <FormikValidation/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
