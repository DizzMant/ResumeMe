document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in');
        }, index * 300); // Задержка для эффекта появления
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100; // Сдвиг в процентах
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length; // Переход к следующему изображению
        updateCarousel();
    });

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Переход к предыдущему изображению
        updateCarousel();
    });
});
