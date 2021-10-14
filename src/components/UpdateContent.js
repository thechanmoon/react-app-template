import React,  { Component } from 'react';
class UpdateContent extends Component{
    render(){
      console.log(this.props.data);
      console.log("UpdateContent render");
      return(
        <article>
          <h2>Update</h2>
          <form action="/update_process" method="post"
            onSubmit={(e)=>{
              e.preventDefault();
              // alert('Submit!!!!');
              //  debugger;
              this.props.onSubmit(e.target.title.value,e.target.desc.value);
            }}
          >

            <p>
              <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
              <textarea name="desc" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>

          </form>
        </article>
      );
    }
  }

  export default UpdateContent;