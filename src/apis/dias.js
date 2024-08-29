export const fetchDiasData = async () => {
    const apiKey = 'b269a42f343f3b949f27f7d7258947a8';
    const ciudad = 'Acapulco';
    const idioma = 'es'
    const unidad = 'metric'
    const dias = '03'

    const url = `https://api.openweathermap.org/data/2.5/forecast/climate?lang=${idioma}&q=${ciudad}&cnt=${dias}&units=${unidad}&appid=${apiKey}`; 

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();
        console.log(data)

        return {
             data
        };
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
        return null; 
    }
}
