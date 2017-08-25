import { ZONE, ANNOUNCE } from '../constants';

import timerStartedMale from '../wav/timer-started-male.wav';
import timerStoppedMale from '../wav/timer-stopped-male.wav';

import zoneShrinkingMale from '../wav/zone-shrinking-male.wav';
import tenSecondsLeftMale from '../wav/10-seconds-left-male.wav';
import thirtySecondsLeftMale from '../wav/30-seconds-left-male.wav';
import fiftyPercentMale from '../wav/50-percent-male.wav';

import firstZoneStartedMale from '../wav/first-zone-started-male.wav';
import secondZoneStartedMale from '../wav/second-zone-started-male.wav';
import thirdZoneStartedMale from '../wav/third-zone-started-male.wav';
import fourthZoneStartedMale from '../wav/fourth-zone-started-male.wav';
import fifthZoneStartedMale from '../wav/fifth-zone-started-male.wav';
import sixthZoneStartedMale from '../wav/sixth-zone-started-male.wav';
import seventhZoneStartedMale from '../wav/seventh-zone-started-male.wav';
import eighthZoneStartedMale from '../wav/eighth-zone-started-male.wav';
import ninthZoneStartedMale from '../wav/ninth-zone-started-male.wav';

const AUDIO = {
  [ZONE.START]: new Audio(timerStartedMale),
  [ZONE.END]: new Audio(timerStoppedMale),

  [ANNOUNCE.SHRINK]: new Audio(zoneShrinkingMale),
  [ANNOUNCE.TEN]: new Audio(tenSecondsLeftMale),
  [ANNOUNCE.THIRTY]: new Audio(thirtySecondsLeftMale),
  [ANNOUNCE.FIFTYPERCENT]: new Audio(fiftyPercentMale),

  [ZONE.FIRST]: new Audio(firstZoneStartedMale),
  [ZONE.SECOND]: new Audio(secondZoneStartedMale),
  [ZONE.THIRD]: new Audio(thirdZoneStartedMale),
  [ZONE.FOURTH]: new Audio(fourthZoneStartedMale),
  [ZONE.FIFTH]: new Audio(fifthZoneStartedMale),
  [ZONE.SIXTH]: new Audio(sixthZoneStartedMale),
  [ZONE.SEVENTH]: new Audio(seventhZoneStartedMale),
  [ZONE.EIGHTH]: new Audio(eighthZoneStartedMale),
  [ZONE.NINTH]: new Audio(ninthZoneStartedMale),
};

export function playAudio(currentInfo) {
  if (currentInfo.announce === ANNOUNCE.ZONE) {
    AUDIO[currentInfo.zone].play();
    return
  }

  AUDIO[currentInfo.announce].play();
}