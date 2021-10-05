import React, {Component} from 'react';
class Subject extends Component{
    render(){
      return(
        <header>
          <h1><a href="/" 
            onClick={(e)=>{
                console.log("in Subject.js test");
                // console.log(e);
                e.preventDefault()
                this.props.OnChangePage();
              }
            }>
            
            {this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;