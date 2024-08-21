// ubicacion.js
import fetch from 'node-fetch';

const apiKey = '2826cea922a0413a8f66049571f401fd';

export const getLocationFromIP = async () => {
    try {
        // Obtener la ubicación basada en la IP
        const ipResponse = await fetch('https://ipinfo.io/json');
        const ipData = await ipResponse.json();
        const [lat, lon] = ipData.loc.split(',').map(Number);
        
        console.log(`Ubicación actual - Latitud: ${lat}, Longitud: ${lon}`);

        // Usar la ubicación obtenida para obtener el código postal
        const geocodeResponse = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`);
        const geocodeData = await geocodeResponse.json();
        const postalCode = geocodeData.results[0].components.postcode;
        console.log(`Código postal: ${postalCode}`);
        
        return postalCode;  // Retorna el código postal
    } catch (error) {
        console.error('Error:', error);
        return null;  // Retorna null en caso de error
    }
};
