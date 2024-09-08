import fetch from 'node-fetch';

const apiKey = 'a25a9b307bbd45afb524ace51c84b69d';  // Reemplaza con tu clave API
const lat = 35.7796;  // Latitud para Raleigh, NC
const lon = -78.6382;  // Longitud para Raleigh, NC

// Construye la URL de la solicitud
const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}&include=minutely`;

// Realiza la solicitud HTTP
fetch(url)
  .then(response => {
    console.log(`Status Code: ${response.status}`);
    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
      throw new Error('Error en la solicitud de la API');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);  // Muestra la respuesta de la API
    
    // Ejemplo de acceso a la información del clima actual
    if (data && data.data && data.data.length > 0) {
      const weather = data.data[0];
      console.log(`Temperatura actual: ${weather.temp}°C`);
      console.log(`Descripción del clima: ${weather.weather.description}`);
    }
  })
  .catch(error => console.error('Error al obtener el pronóstico:', error));
