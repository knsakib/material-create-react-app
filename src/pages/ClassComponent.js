import React from 'react';
import Typography from 'material-ui/Typography';

class Hello extends React.Component {
  render() {
    return (
      <div>
      <Typography variant="display1">
        <pre>{`
          import React, { Component } from 'react';

          class App extends Component {
            render() {
              return <h1>Hello World!</h1>;
            }
          }

          export default App
        `}</pre>
        </Typography>
      </div>
    );
  }
}


export default Hello;
