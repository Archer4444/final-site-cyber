// Переключение темы
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    themeToggle.textContent = isDark ? '🌞 Светлая тема' : '🌓 Тёмная тема';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Загрузка темы
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = '🌞 Светлая тема';
}

// Текущая дата в футере
const currentDate = new Date().toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
document.getElementById('current-date').textContent = currentDate;
