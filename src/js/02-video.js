const STORAGE_PLAYER_TIME = 'videoplayer-current-time';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate',
    throttle(
        function (data) {
            localStorage.setItem(STORAGE_PLAYER_TIME, data.seconds);
        }
    , 1000)
);

const persistedVideoTime = JSON.parse(localStorage.getItem(STORAGE_PLAYER_TIME));

if (persistedVideoTime) {
    player.setCurrentTime(persistedVideoTime);
}
