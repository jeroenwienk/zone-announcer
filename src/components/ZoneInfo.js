import React, { PureComponent, Component } from 'react';

import { ZONE_DATA, ZONE, ANNOUNCE, ZONE_TIMINGS } from '../constants';

import Timer from '../containers/Timer';
import Typography from 'material-ui/Typography';

class ZoneInfo extends PureComponent {

  getCurrentZoneInfo(currentInfo) {
    if (currentInfo != null) {
      return ZONE_DATA[currentInfo.zone];
    }
    return null;
  }

  render() {
    const data = this.getCurrentZoneInfo(this.props.currentInfo);

    if (data == null) {
      return (
        <div>
          <Typography type="title">
            Current Zone
          </Typography>

          <Typography type="body1">
            No active zone
          </Typography>
        </div>
      )
    }

    const status = this.props.currentInfo.announce === ANNOUNCE.SHRINK ? 'SHRINKING' : 'STABLE';
    const timings = ZONE_TIMINGS[this.props.currentInfo.zone];

    return (
      <div>

        <Typography gutterBottom type="title">
          Current Zone
        </Typography>

        <div>{`Nr: ${this.props.currentInfo.zone}`}</div>
        <div>{`Status: ${status}`}</div>
        <div>{`Diameter: ${data.diameter}m`}</div>
        <div>{`Dps: ${data.dps}%`}</div>
        <div>{`Survive: ${Timer.formatTime(data.survive)}`}</div>
        <div>{`Active: ${Timer.formatTime(timings.zone)}`}</div>
        <div>{`Shrink: ${Timer.formatTime(timings.shrink)}`}</div>


      </div>

    );
  }
}

export default ZoneInfo;