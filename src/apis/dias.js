export const fetchDiasData = async () => {
    const apiKey = 'b269a42f343f3b949f27f7d7258947a8';
    const ciudad = 'Acapulco';
    const idioma = 'es'
    const unidad = 'metric'
    const dias = '40'

    const url = `https://api.openweathermap.org/data/2.5/forecast?lang=${idioma}&q=${ciudad}&cnt=${dias}&units=${unidad}&appid=${apiKey}`; 
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();
        console.log(data)

        //Temperatura
        
        const media1 = [data.list[2].main.temp, data.list[5].main.temp, data.list[7].main.temp];
        const suma = media1.reduce((acc, curr) => acc + curr, 0);
        const media = suma / media1.length;

        const media2 = [data.list[10].main.temp, data.list[13].main.temp, data.list[15].main.temp];
        const suma2 = media2.reduce((acc, curr) => acc + curr, 0);
        const media_2 = suma2 / media2.length;

        const media3 = [data.list[18].main.temp, data.list[21].main.temp, data.list[23].main.temp];
        const suma3 = media3.reduce((acc, curr) => acc + curr, 0);
        const media_3 = suma3 / media3.length;

        const media4 = [data.list[26].main.temp, data.list[29].main.temp, data.list[31].main.temp];
        const suma4 = media4.reduce((acc, curr) => acc + curr, 0);
        const media_4 = suma4 / media4.length;

        const media5 = [data.list[34].main.temp, data.list[37].main.temp, data.list[39].main.temp];
        const suma5 = media5.reduce((acc, curr) => acc + curr, 0);
        const media_5 = suma5 / media5.length;

        const humedad = data.list[5].main.humidity;
        const humedad2 = data.list[13].main.humidity;
        const humedad3 = data.list[21].main.humidity;
        const humedad4 = data.list[29].main.humidity;
        const humedad5 = data.list[37].main.humidity;

        const viento = data.list[5].wind.speed
        const viento2 = data.list[13].wind.speed
        const viento3 = data.list[21].wind.speed
        const viento4 = data.list[29].wind.speed
        const viento5 = data.list[37].wind.speed

        const presion = data.list[5].main.pressure
        const presion2 = data.list[13].main.pressure
        const presion3 = data.list[21].main.pressure
        const presion4 = data.list[29].main.pressure
        const presion5 = data.list[37].main.pressure

        const presipitacion = data.list[5].pop
        const presipitacion2 = data.list[13].pop
        const presipitacion3 = data.list[21].pop
        const presipitacion4 = data.list[29].pop
        const presipitacion5 = data.list[37].pop

        const visibilidad = data.list[5].visibility
        const visibilidad2 = data.list[13].visibility
        const visibilidad3 = data.list[21].visibility
        const visibilidad4 = data.list[29].visibility
        const visibilidad5 = data.list[37].visibility

        switch (presipitacion) {
            case presipitacion == 1:
                
                break;
        
            default:
                break;
        }

        return {
            dia: data.list, 
            clima: data.list[2].main.temp,
            media1: media,
            media2: media_2,
            media3: media_3,
            media4: media_4,
            media5: media_5,
            humedad: humedad,
            humedad2: humedad2,
            humedad3: humedad3,
            humedad4: humedad4,
            humedad5: humedad5,
            viento: viento,
            viento2: viento2,
            viento3: viento3,
            viento4: viento4,
            viento5: viento5,
            presion: presion,
            presion2: presion2,
            presion3: presion3,
            presion4: presion4,
            presion5: presion5,
            presipitacion: presipitacion,
            presipitacion2: presipitacion2,
            presipitacion3: presipitacion3,
            presipitacion4: presipitacion4,
            presipitacion5: presipitacion5,
            visibilidad: visibilidad,
            visibilidad2: visibilidad2,
            visibilidad3: visibilidad3,
            visibilidad4: visibilidad4,
            visibilidad5: visibilidad5
        };
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
        return null; 
    }
}
