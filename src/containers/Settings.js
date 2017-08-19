import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ACTIONS } from '../constants'

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormGroup, FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  cardRoot: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  }),
  radioGroupRoot: {
    margin: `${theme.spacing.unit}px 0`,
  },
  textFieldRoot: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  }
});


class Settings extends PureComponent {
  state = {
    startFrom: 'plane',
    toggleKey: '',
    toggleCtrl: false,
    toggleAlt: false,
    incrementKey: '',
    incrementCtrl: false,
    incrementAlt: false,
    decrementKey: '',
    decrementCtrl: false,
    decrementAlt: false,
  };

  componentDidMount() {
    this.setState(this.props.settings);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.settings !== this.props.settings) {
      this.setState(nextProps.settings);
    }
  }

  handleSaveClick = (event) => {
    this.props.save(this.state);
  };

  handleTimerStartChange = (event, value) => {
    this.setState({ startFrom: value });
  };

  handleKeyTogglePress = (event) => {
    const keyName = event.key;
    this.setState({
      toggleKey: keyName
    })
  };

  handleCtrlToggle = (event, checked) => {
    this.setState({
      toggleCtrl: checked
    })
  };

  handleAltToggle = (event, checked) => {
    this.setState({
      toggleAlt: checked
    })
  };

  handleKeyIncrementPress = (event) => {
    const keyName = event.key;
    this.setState({
      incrementKey: keyName
    })
  };

  handleCtrlIncrement = (event, checked) => {
    this.setState({
      incrementCtrl: checked
    })
  };

  handleAltIncrement = (event, checked) => {
    this.setState({
      incrementAlt: checked
    })
  };

  handleKeyDecrementPress = (event) => {
    const keyName = event.key;
    this.setState({
      decrementKey: keyName
    })
  };

  handleCtrlDecrement = (event, checked) => {
    this.setState({
      decrementCtrl: checked
    })
  };

  handleAltDecrement = (event, checked) => {
    this.setState({
      decrementAlt: checked
    })
  };

  render() {
    return (
      <div>

        <Paper className={this.props.classes.cardRoot}>
          <Typography type="title" gutterBottom>
            Settings
          </Typography>
        </Paper>

        <Paper className={this.props.classes.cardRoot}>

          <Typography type="subheading" gutterBottom>
            Timer
          </Typography>

          <FormControl>
            <FormLabel component="label">Start from</FormLabel>
            <RadioGroup
              name="timer-start"
              className={this.props.classes.radioGroupRoot}
              selectedValue={this.state.startFrom}
              onChange={this.handleTimerStartChange}
            >
              <FormControlLabel value="plane" control={<Radio />} label="Plane"/>
              <FormControlLabel value="first-circle" control={<Radio />} label="First Circle"/>
            </RadioGroup>
          </FormControl>
        </Paper>

        <Paper className={this.props.classes.cardRoot}>
          <Typography type="subheading" gutterBottom>
            Shortcuts
          </Typography>

          <FormControl>
            <FormLabel>Start Timer</FormLabel>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.toggleCtrl}
                    onChange={this.handleCtrlToggle}
                  />
                }
                label="CTRL"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.toggleAlt}
                    onChange={this.handleAltToggle}
                  />
                }
                label="ALT"
              />
              <TextField
                id="name"
                value={this.state.toggleKey}
                onKeyUp={this.handleKeyTogglePress}
                className={this.props.classes.textFieldRoot}
                margin="dense"
              />
            </FormGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Increment Timer</FormLabel>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.incrementCtrl}
                    onChange={this.handleCtrlIncrement}
                  />
                }
                label="CTRL"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.incrementAlt}
                    onChange={this.handleAltIncrement}
                  />
                }
                label="ALT"
              />
              <TextField
                id="name"
                value={this.state.incrementKey}
                onKeyUp={this.handleKeyIncrementPress}
                className={this.props.classes.textFieldRoot}
                margin="dense"
              />
            </FormGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Decrement Timer</FormLabel>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.decrementCtrl}
                    onChange={this.handleCtrlDecrement}
                  />
                }
                label="CTRL"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.decrementAlt}
                    onChange={this.handleAltDecrement}
                  />
                }
                label="ALT"
              />
              <TextField
                id="name"
                value={this.state.decrementKey}
                onKeyUp={this.handleKeyDecrementPress}
                className={this.props.classes.textFieldRoot}
                margin="dense"
              />
            </FormGroup>
          </FormControl>
        </Paper>

        <div className={this.props.classes.buttonContainer}>
          <Button onClick={this.handleSaveClick} color="primary">
            Save
          </Button>
        </div>

      </div>
    )
  }
}

const save = (settings) => (dispatch, getState) => {
  dispatch({
    type: ACTIONS.SETTINGS_SAVE,
    payload: settings
  });
};


function mapStateToProps(state) {
  return {
    settings: state.settings,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    save
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Settings));
