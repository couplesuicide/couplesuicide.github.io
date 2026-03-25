<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('player-toggle');
    const playIcon = document.getElementById('icon-play');
    const pauseIcon = document.getElementById('icon-pause');


    let isPlaying = false;

    toggleBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        } else {

            audio.play().catch(e => {
                console.error("Автовоспроизведение заблокировано браузером. Ждем клика.");
            });
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        }
        isPlaying = !isPlaying;
    });
});
=======
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('audio-toggle');
    const mutedIcon = document.getElementById('icon-muted');
    const playingIcon = document.getElementById('icon-playing');

    let isPlaying = false;

    toggleBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            mutedIcon.classList.remove('hidden');
            playingIcon.classList.add('hidden');
        } else {
            audio.play().catch(e => console.log("Нужен клик для старта"));
            mutedIcon.classList.add('hidden');
            playingIcon.classList.remove('hidden');
        }
        isPlaying = !isPlaying;
    });
});
>>>>>>> 53bbd79218bb79ac7c1a381dae78fbcd4abecc37
