 const buttons = document.querySelectorAll('[data-bs-theme-value]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        document.documentElement.setAttribute(
            'data-bs-theme',
            button.getAttribute('data-bs-theme-value')
        );
    });
});