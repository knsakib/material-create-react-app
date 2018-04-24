import React, { Component, Fragment } from 'react';
import Typography from 'material-ui/Typography';

class LifeCycles extends Component {
  constructor(props){
    super(props);

    this.state = {greetings: "Hello world"};
  }

  componentDidMount(){
    this.setState({
      greetings: 'Good Morning World'
    })
  }

  render(){
    return(
      <div>
        {this.state.greetings}
      </div>
    );
  }
}




export default LifeCycles;
