

import throttle from "lodash.throttle";
import Player from '@vimeo/player';


const playOn = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
  localStorage.setItem(playOn, e.seconds);
}

setCurrenTime();

function setCurrenTime() {
  const currentTime = localStorage.getItem(playOn);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}