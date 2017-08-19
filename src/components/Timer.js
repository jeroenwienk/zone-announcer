import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  }),
});

class Timer extends Component {
  render () {
    return (
      <Paper className={this.props.classes.root} >
        <Typography type="title" gutterBottom>
          Timer
        </Typography>
        <Typography type="body1" gutterBottom>
          Timer =
        </Typography>
      </Paper>
    )
  }
}

export default withStyles(styles)(Timer);