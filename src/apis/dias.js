export const fetchDiasData = async () => {
    const apiKey = 'b269a42f343f3b949f27f7d7258947a8';
    const ciudad = 'Acapulco';

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}&units=metric`; // Usar la URL correcta y añadir 'units'

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();

        return {
            precipitacion: data.list[0].dt_txt // Puedes ajustar la estructura si necesitas otras propiedades
        };
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
        return null; // Retornar null en caso de error
    }
}
