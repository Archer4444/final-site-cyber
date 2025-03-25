// Общий для всех страниц
document.addEventListener('DOMContentLoaded', function() {
    // Переключение темы
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            themeToggle.textContent = isDark ? '🌞 Светлая тема' : '🌓 Тёмная тема';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // Загрузка темы
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '🌞 Светлая тема';
        }
    }

    // Дата в футере
    const currentDate = new Date().toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dateElements = document.querySelectorAll('#current-date');
    dateElements.forEach(el => {
        el.textContent = currentDate;
    });
});
