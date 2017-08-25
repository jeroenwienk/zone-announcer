import { playAudio } from './playAudio';
import { ZONE_TIMINGS, ZONE, ANNOUNCE } from '../constants';

const TIMER_START = -ZONE_TIMINGS.PLANE_DELAY;
const FIRST_ZONE_START = 0;
const FIRST_ZONE_SHRINK = ZONE_TIMINGS.FIRST.zone;
const SECOND_ZONE_START = ZONE_TIMINGS.FIRST.zone + ZONE_TIMINGS.FIRST.shrink;
const SECOND_ZONE_SHRINK = SECOND_ZONE_START + ZONE_TIMINGS.SECOND.zone;
const THIRD_ZONE_START = SECOND_ZONE_START + ZONE_TIMINGS.SECOND.zone + ZONE_TIMINGS.SECOND.shrink;
const THIRD_ZONE_SHRINK = THIRD_ZONE_START + ZONE_TIMINGS.THIRD.zone;
const FOURTH_ZONE_START = THIRD_ZONE_START + ZONE_TIMINGS.THIRD.zone + ZONE_TIMINGS.THIRD.shrink;
const FOURTH_ZONE_SHRINK = FOURTH_ZONE_START + ZONE_TIMINGS.FOURTH.zone;
const FIFTH_ZONE_START = FOURTH_ZONE_START + ZONE_TIMINGS.FOURTH.zone + ZONE_TIMINGS.FOURTH.shrink;
const FIFTH_ZONE_SHRINK = FIFTH_ZONE_START + ZONE_TIMINGS.FIFTH.zone;
const SIXTH_ZONE_START = FIFTH_ZONE_START + ZONE_TIMINGS.FIFTH.zone + ZONE_TIMINGS.FIFTH.shrink;
const SIXTH_ZONE_SHRINK = SIXTH_ZONE_START + ZONE_TIMINGS.SIXTH.zone;
const SEVENTH_ZONE_START = SIXTH_ZONE_START + ZONE_TIMINGS.SIXTH.zone + ZONE_TIMINGS.SIXTH.shrink;
const SEVENTH_ZONE_SHRINK = SEVENTH_ZONE_START + ZONE_TIMINGS.SEVENTH.zone;
const EIGHTH_ZONE_START = SEVENTH_ZONE_START + ZONE_TIMINGS.SEVENTH.zone + ZONE_TIMINGS.SEVENTH.shrink;
const EIGHTH_ZONE_SHRINK = EIGHTH_ZONE_START + ZONE_TIMINGS.EIGHTH.zone;
const NINTH_ZONE_START = EIGHTH_ZONE_START + ZONE_TIMINGS.EIGHTH.zone + ZONE_TIMINGS.EIGHTH.shrink;
const NINTH_ZONE_SHRINK = NINTH_ZONE_START + ZONE_TIMINGS.NINTH.zone;
const TIMER_END = NINTH_ZONE_SHRINK + 120;

export function checkTime(time, startFrom) {
  if (startFrom === 'plane') {
    time -= ZONE_TIMINGS.PLANE_DELAY
  }

  if (time === TIMER_START) {
    const currentInfo = {
      zone: ZONE.START,
      announce: ANNOUNCE.ZONE
    };
    playAudio(currentInfo);
    return currentInfo;
  }

  if (time >= FIRST_ZONE_START && time < SECOND_ZONE_START)
    return zoneCheck(time, ZONE.FIRST, FIRST_ZONE_START, FIRST_ZONE_SHRINK);

  if (time >= SECOND_ZONE_START && time < THIRD_ZONE_START)
    return zoneCheck(time, ZONE.SECOND, SECOND_ZONE_START, SECOND_ZONE_SHRINK);

  if (time >= THIRD_ZONE_START && time < FOURTH_ZONE_START)
    return zoneCheck(time, ZONE.THIRD, THIRD_ZONE_START, THIRD_ZONE_SHRINK);

  if (time >= FOURTH_ZONE_START && time < FIFTH_ZONE_START)
    return zoneCheck(time, ZONE.FOURTH, FOURTH_ZONE_START, FOURTH_ZONE_SHRINK);

  if (time >= FIFTH_ZONE_START && time < SIXTH_ZONE_START)
    return zoneCheck(time, ZONE.FIFTH, FIFTH_ZONE_START, FIFTH_ZONE_SHRINK);

  if (time >= SIXTH_ZONE_START && time < SEVENTH_ZONE_START)
    return zoneCheck(time, ZONE.SIXTH, SIXTH_ZONE_START, SIXTH_ZONE_SHRINK);

  if (time >= SEVENTH_ZONE_START && time < EIGHTH_ZONE_START)
    return zoneCheck(time, ZONE.SEVENTH, SEVENTH_ZONE_START, SEVENTH_ZONE_SHRINK);

  if (time >= EIGHTH_ZONE_START && time < NINTH_ZONE_START)
    return zoneCheck(time, ZONE.EIGHTH, EIGHTH_ZONE_START, EIGHTH_ZONE_SHRINK);

  if (time >= NINTH_ZONE_START && time < TIMER_END)
    return zoneCheck(time, ZONE.NINTH, NINTH_ZONE_START, NINTH_ZONE_SHRINK);

  return null;
}

function zoneCheck(time, zone, start, shrink) {
  switch (time) {

    case start: {
      const currentInfo = {
        zone,
        announce: ANNOUNCE.ZONE
      };
      playAudio(currentInfo);
      return currentInfo;
    }

    case shrink - 30: {
      const currentInfo = {
        zone,
        announce: ANNOUNCE.THIRTY
      };
      playAudio(currentInfo);
      return currentInfo;
    }

    case shrink - 10: {
      const currentInfo = {
        zone,
        announce: ANNOUNCE.TEN
      };
      playAudio(currentInfo);
      return currentInfo;
    }

    case shrink: {
      const currentInfo = {
        zone,
        announce: ANNOUNCE.SHRINK
      };
      playAudio(currentInfo);
      return currentInfo;
    }

    default:
      return null
  }
}