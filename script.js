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
            audio.play().catch(() => console.log("Нужен клик"));
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        }
        isPlaying = !isPlaying;
    });
});