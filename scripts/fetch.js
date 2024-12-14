fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip-display').textContent = `Ваша IP-адреса: ${data.ip}`;
    })
    .catch(error => {
        document.getElementById('ip-display').textContent = 'Не вдалося отримати IP-адресу';
        console.error('Помилка:', error);
    });