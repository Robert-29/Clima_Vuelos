export const fetchMiClima = async () => {
    const apiKey = 'b269a42f343f3b949f27f7d7258947a8';
    const ciudad = 'Naucalpan de juarez';
    const idioma = 'es';
    const unidad = 'metric';
    const zip = '53659'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},mx&zip=${zip}&appid=${apiKey}&units=${unidad}&lang=${idioma}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
      
      const data = await response.json();

      return {
        temp: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        nombre: data.name,
        country: data.sys.country,
        fecha: data.dt
      };
    } catch (error) {
      console.error('Hubo un problema con la solicitud:', error);
    }
}