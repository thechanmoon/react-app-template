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
      mode:"read",
      selected_content_id:2,
      subject:{title:"WEB",sub:"World Wide Web!"},
      welcome:{title:"Welcome",desc:"Hello, React!!"},
      contents: [
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"Javascript", desc:"Javascript is for interactive"}
      ]
    }
  }
  render(){
    var title = null;
    var desc = null; 

    if(this.state.mode === "welcome")
    {
      title = this.state.welcome.title;
      desc = this.state.welcome.desc;
    }else if(this.state.mode ==="read"){
      title = this.state.contents[this.state.selected_content_id-1].title;
      desc = this.state.contents[this.state.selected_content_id-1].desc;
    }
    return (
      <div className="App">
        {/* Hello, React!! */}
        {/* <Subject 
          title = {this.state.subject.title} 
          sub = {this.state.subject.sub}>
        </Subject> */}
        {/* <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            // debugger;
            this.setState({mode:"welcome"});
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <Subject 
          title = {this.state.subject.title} 
          sub = {this.state.subject.sub}          
          OnChangePage={
            ()=>{
              // console.log("in App.js test");
              // alert("tiburon");
              this.setState({mode:'welcome'});
            }
          }
        > 

        </Subject>
        <Toc 
          data={this.state.contents}
          OnChangePage={
            (id)=>{
              //  console.log("in App.js test");
              //  alert("tiburon");
              this.setState({
                mode:'read',
                selected_content_id:Number(id)
              });
            }
          }
        >

        </Toc>
        {/* <Contents title = "HTML" desc = "HTML is HyperText Makrup Language."></Contents> */}
        <Contents title = {title} desc = {desc}></Contents>
      </div >
    );          
  }
}

export default App;
