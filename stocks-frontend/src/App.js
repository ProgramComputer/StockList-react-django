//import logo from './logo.svg';
import './App.css';
import {Fragment, Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
function App() {
    return (
       <Fragment>
         <Header />
         <Home />
         <ToastContainer />
       </Fragment>
  )
}

export default App;
