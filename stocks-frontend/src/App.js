//import logo from './logo.svg';
import './App.css';
import {Fragment, Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
class App extends Component  {
  render(){
    return (
       <Fragment>
         <Header />
         <Home />
       </Fragment>
  )
}
}

export default App;
