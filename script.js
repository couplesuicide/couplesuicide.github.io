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
