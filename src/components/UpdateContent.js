import React,  { Component } from 'react';
class UpdateContent extends Component{
    state ={
      title: this.props.data.title,
      desc:this.props.data.desc
    }
    // constructor(props){
    //   super(props);
    //   this.state ={
    //     title:this.props.data.title,
    //     desc:this.props.data.desc
    //   }
    // }

    componentDidMount(){

    }

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
              <input type="text" name="title" placeholder="title" value = {this.state.title}
                      onChange={(e)=>{
                      this.setState( {[e.target.name]:e.target.value} );
               }}
              ></input>
            </p>
            <p>
              <textarea name="desc" placeholder="description" value ={this.state.desc}
                        onChange={(e)=>{
                        this.setState( {[e.target.name]:e.target.value} );
               }}
              ></textarea>
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