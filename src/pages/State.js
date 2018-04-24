import React, { Component, Fragment } from 'react';
import Typography from 'material-ui/Typography';


class State extends Component {
  constructor(props){
    super(props);

    this.state = {
      message: " This is a state(message is the state name) of componenet 'State' "
    };
  }
  render(){
    return(
      <div>
        <Typography variant="title">
          <pre>{`

            import React, { Component, Fragment } from 'react';

            class State extends Component {
              constructor(props){
                super(props);

                this.state = {
                  message: 'Hello World'
                };
              }
              render(){
                return(
                  <div>
                    {this.state.message}
                  </div>
                );
              }
            }

            export default State;



          `}</pre>
        </Typography>
        {this.state.message}
      </div>
    );
  }
}

export default State;
