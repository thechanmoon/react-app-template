import React,  { Component } from 'react';
// import logo from './logo.svg';
import Toc from "./components/Toc";
import Contents from "./components/Contents"
import Subject from "./components/Subject"
import './App.css';

// function App() {
class App extends Component{
  render(){
    return (
      <div className="App">
        {/* Hello, React!! */}
        <Subject title = "WEB" sub = "world wide web!"></Subject>
        <Subject title = "React" sub = "For UI"></Subject>
        <Toc></Toc>
        <Contents title = "HTML" desc = "HTML is HyperText Makrup Language."></Contents>
      </div >
    );          
  }
}

export default App;
