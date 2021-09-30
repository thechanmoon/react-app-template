import React,  { Component } from 'react';
// import logo from './logo.svg';
import Toc from "./components/Toc";
import Contents from "./components/Contents"
import Subject from "./components/Subject"
import './App.css';

// function App() {
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"WEB",sub:"World Wide Web!"},
      contents: [
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"Javascript", desc:"Javascript is for interactive"}
      ]
    }
  }
  render(){
    return (
      <div className="App">
        {/* Hello, React!! */}
        <Subject 
          title = {this.state.subject.title} 
          sub = {this.state.subject.sub}>
        </Subject>
        {/* <Subject title = "React" sub = "For UI"></Subject> */}
        <Toc data={this.state.contents}></Toc>
        <Contents title = "HTML" desc = "HTML is HyperText Makrup Language."></Contents>
      </div >
    );          
  }
}

export default App;
