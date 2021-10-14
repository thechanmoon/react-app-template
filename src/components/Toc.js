import React,  { Component } from 'react';
class Toc extends Component{
    shouldComponentUpdate(newProps, newState){
      console.log("Toc shouldComponentUpdate",newProps.data, this.props.data);
      if(newProps.data === this.props.data)
        return false;

      return true;
    }
    render(){
      console.log("TOC render");
      var data = this.props.data;
      var lists = [];
      for(var i = 0; i < data.length;i ++)
      {
        lists.push(
          <li key = {data[i].id}>
            <a href ={"/contents/"+data[i].id}
              data-id = {data[i].id}
              onClick={(e)=>{
                // console.log("in Subject.js test");
                // console.log(e);
                
                e.preventDefault()
                this.props.OnChangePage(e.target.dataset.id);
              }}
            >{data[i].title}</a>
          </li>)
      }
      return(
        <nav>
          <ul>
              {/* <li> <a href="1.html">HTML</a></li>
              <li> <a href="2.html">CSS</a></li>
              <li> <a href="3.html">Javascript</a></li> */}
              {lists}
          </ul>
        </nav>
      );
    }
  }
  export default Toc;