// Переключение темы
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    themeToggle.textContent = isDark ? '🌞 Светлая тема' : '🌓 Тёмная тема';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Загрузка темы из localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = '🌞 Светлая тема';
}

// Проверка чеклиста
document.getElementById('check-btn').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    let checked = 0;
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) checked++;
    });

    const result = document.getElementById('result');
    const total = checkboxes.length;
    const percentage = Math.round((checked / total) * 100);

    if (percentage >= 80) {
        result.textContent = `✅ Отлично! Ваша безопасность на ${percentage}%`;
        result.style.background = 'rgba(46, 204, 113, 0.2)';
    } else if (percentage >= 50) {
        result.textContent = `⚠️ Неплохо! Ваша безопасность на ${percentage}%. Есть куда расти!`;
        result.style.background = 'rgba(241, 196, 15, 0.2)';
    } else {
        result.textContent = `❌ Опасно! Ваша безопасность на ${percentage}%. Срочно примите меры!`;
        result.style.background = 'rgba(231, 76, 60, 0.2)';
    }
});

// Плавная прокрутка
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});