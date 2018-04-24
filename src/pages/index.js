import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import 'typeface-roboto';

import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import Props from './Props';
import State from './State';
import LifeCycles from './LifeCycles';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';


const MyLink = props => <Link to="/ClassComponent" {...props} />
const MyLink2 = props => <Link to="/FunctionalComponent" {...props} />
const MyLink3 = props => <Link to="/Props" {...props} />
const MyLink4 = props => <Link to="/State" {...props} />
const MyLink5 = props => <Link to="/LifeCycles" {...props} />




const styles = theme => ({
  root: {
    // textAlign: 'center',
    // paddingTop: theme.spacing.unit * 20,
    margin: theme.spacing.unit * 5,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <BrowserRouter>
      <div className={classes.root}>

      <Grid container spacing={24}>
          <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
              <List component="nav">

                  <ListItem button component={MyLink}>
                    <ListItemText primary="Class based Component" />
                  </ListItem>

                  <ListItem button component={MyLink2}>
                    <ListItemText primary="Functinal Component" />
                  </ListItem>

                  <ListItem button component={MyLink3}>
                    <ListItemText primary="Props" />
                  </ListItem>

                  <ListItem button component={MyLink4}>
                    <ListItemText primary="State" />
                  </ListItem>

                  <ListItem button component={MyLink5}>
                    <ListItemText primary="LifeCycles" />
                  </ListItem>

              </List>
              </Paper>
          </Grid>
          <Grid item xs={18} sm={9}>

              <Paper className={classes.paper}>
                  <Switch>
                        <Route path='/ClassComponent' exact component={ClassComponent} />
                  </Switch>

                  <Switch>
                        <Route path='/FunctionalComponent' exact component={FunctionalComponent} />
                  </Switch>

                  <Switch>
                        <Route path='/Props' exact component={Props} />
                  </Switch>

                  <Switch>
                        <Route path='/State' exact component={State} />
                  </Switch>

                  <Switch>
                        <Route path='/LifeCycles' exact component={LifeCycles} />
                  </Switch>


            </Paper>
          </Grid>
      </Grid>
      </div>
      </BrowserRouter>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
