import React,  { Component } from 'react';
class Toc extends Component{
    render(){
      return(
        <nav>
          <ul>
              <li> <a href="1.html">HTML</a></li>
              <li> <a href="2.html">CSS</a></li>
              <li> <a href="3.html">Javascript</a></li>
          </ul>
        </nav>
      );
    }
  }
  export default Toc;