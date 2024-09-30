
document.getElementById('getWeatherBtn').addEventListener('click', obtenerClima);

function obtenerClima() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'c89497ba08d02ac8989689591c728cf1'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => mostrarClima(data))
    .catch(error => console.error('Error:', error));
   

 }

 function mostrarClima(data) {
    const weatherDiv = document.getElementById('weatherResult');
    weatherDiv.innerHTML = `
        <h3>Clima en ${data.name}:</h3>
        <p>Temperatura: ${data.main.temp} °C</p>
        <p>Descripción: ${data.weather[0].description}</p>
        <p>Humedad: ${data.main.humidity}%</p>
    `;
}

