import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

const FunctionalComponent = () => {
    return (
      <div>
      <Typography variant="title">
        <pre>{`
          import React, { Component } from 'react';

          const App = () => {
              return (
                <h1>Hello World!</h1>;
              )
            }

          export default App;

          -----OR-----

          import React, { Component } from 'react';

          function App() {
              return (
                <h1>Hello World!</h1>;
              )
            }

          export default App;


        `}</pre>
        </Typography>
      </div>
    );
  }



export default FunctionalComponent;
