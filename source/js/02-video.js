
// инициализировали vimeo
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// добавили библиотеку лодаш тротл
const throttle = require('lodash.throttle');

// ключ локалсторидж
const STORAGE_KEY_VIDEO = 'videoplayer-current-time';

// запускаем отслеживание и сохранение времени плеера
player.on('timeupdate', throttle(saveDataTime, 1000));

// фун. сохранения currentTime в localStorage
function saveDataTime(data) {
    const saveTime = data.seconds;
    localStorage.setItem(STORAGE_KEY_VIDEO, saveTime)
    
}

// добавляем слушателя на плеер 
player.on('play', triggeredVideoFromLastSaveTime)

// фун. запуска видео с последнего сохраненного места
function triggeredVideoFromLastSaveTime(data) {
    const lastTime = localStorage.getItem(STORAGE_KEY_VIDEO)
    if(lastTime){
        player.setCurrentTime(Number(lastTime))
    }
    
}

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
console.log();