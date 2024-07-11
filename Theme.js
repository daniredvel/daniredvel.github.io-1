// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const statusText = document.getElementById('status');

    // Actualiza el texto inicial basado en el estado del interruptor
    statusText.textContent = toggleSwitch.checked ? '🌞' : '🌜';

    // Escucha el evento de cambio del interruptor
    toggleSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        statusText.textContent = toggleSwitch.checked ? '🌞' : '🌜';
    });
});
