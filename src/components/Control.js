import React, {Component} from 'react';
class Control extends Component{
    render(){
      return(
        <ul>
          <li><a href="/create" onClick={(e)=>{
                // console.log("in Subject.js test");
                // console.log(e);
                
                e.preventDefault()
                this.props.OnChangeMode("create");
              }}>create</a></li>  
          <li><a href="/update" onClick={(e)=>{
                // console.log("in Subject.js test");
                // console.log(e);
                
                e.preventDefault()
                this.props.OnChangeMode("update");
              }}>update</a></li>  
          <li><input type = "button" value = "delete" onClick={(e)=>{
                // console.log("in Subject.js test");
                // console.log(e);
                
                e.preventDefault()
                this.props.OnChangeMode("delete");
              }}></input></li>  
        </ul>
      );
    }
  }

  export default Control;