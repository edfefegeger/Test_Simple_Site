document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const footer = document.querySelector('footer');

    // Проверяем, сохранена ли тема в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        footer.classList.add(savedTheme);
    }

    // Обработчик события для кнопки переключения темы
    themeToggle.addEventListener('click', function() {
        // Переключаем класс для body и footer для изменения темы
        body.classList.toggle('dark-theme');
        footer.classList.toggle('dark-theme');

        // Сохраняем выбранную тему в localStorage
        const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
        localStorage.setItem('theme', currentTheme);
    });
});
