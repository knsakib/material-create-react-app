import React, { Component, Fragment } from 'react';
import Typography from 'material-ui/Typography';

import Greetings from './Greetings';


const Props = () => {
    return (
      <div>
      <Typography variant="title">
        <pre>{`
          import React, { Component } from 'react';
          import Greetings from './Greetings';

          const App = (props) => {
              return (
                <div>
                  {props.greetings}
                </div>
              )
            }

          export default App;

          ----OR------

          import React, { Component } from 'react';
          import Greetings from './Greetings';

          class Greetings extends Component {
            render() {
            return (
              <Fragment>
                {this.props.greetings}
              </Fragment>
              )
            }
          }
          export default Greetings;


          -----AND-----

          import React, { Component } from 'react';

          const Greetings = (props) => {
            return (
              <Fragment
                greetings="Hello World!"
              />
              )
            }

          export default Greetings;


        `}</pre>
        </Typography>

        <Greetings greetings="This string passing from Props component to Greetings componenet as a props" />

      </div>
    );
  }



export default Props;
