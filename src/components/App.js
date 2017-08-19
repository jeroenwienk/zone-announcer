import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import Navigation from './Navigation';

const styles = theme => {
  return ({
    appRoot: {
      width: '100%',
      display: 'flex'
    },
    navRoot: {
      backgroundColor: theme.palette.primary['500'],
      height: '100vh',
      flexBasis: 48,
      flexGrow: 0,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0px 2.5px 3px #000'
    },
    contentRoot: {
      height: '100vh',
      flexBasis: 640,
      flexGrow: 0,
      flexShrink: 1,
      margin: '0 auto',
    }
  })
};

class App extends Component {
  render() {
    return (
      <div className={this.props.classes.appRoot}>

        <Navigation className={this.props.classes.navRoot}/>

        <div className={this.props.classes.contentRoot}>
          {this.props.children}
        </div>

      </div>
    )
  }
}

export default withStyles(styles)(App);