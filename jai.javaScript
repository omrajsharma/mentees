const heart = document.getElementById('heart');

heart.addEventListener('click', () => {
    heart.classList.toggle('glowing');
});

heart.classList.add('glowing');