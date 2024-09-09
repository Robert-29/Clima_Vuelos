import { Line } from 'react-chartjs-2';
import { Chart as chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { useState, useEffect } from 'react';
import { fetchDiasData } from "../apis/dias";
chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export function Grafico() {
    const [climaDias, setClimaDias] = useState(null);

    useEffect(() => {
        const getClimaDias = async () => {
            const data = await fetchDiasData();
            setClimaDias(data);
        };
        getClimaDias();
    }, []);

    // Verificación si los datos de clima están cargados
    if (!climaDias) {
        return <p>Cargando datos del clima...</p>;  // Mostrar un mensaje de carga
    }

    const clima = [

        Math.floor(climaDias.media1),
        Math.floor(climaDias.media2),
        Math.floor(climaDias.media3),
        Math.floor(climaDias.media4),
        Math.floor(climaDias.media5),
    ];

    const dia = [1, 2, 3, 4, 5];  // Ejemplo de etiquetas para los días

    const data = {
        labels: dia,
        datasets: [
            {
                label: 'Clima',
                data: clima,
                tension: .5,
                fill: true,
                borderColor: 'white',
                backgroundColor: 'rgba(113, 169, 247, 0)',
                pointRadius: 5,
                pointBorderColor: 'yellow',
                pointBackgroundColor: 'yellow'
            }
        ]
    };

    const opciones = {
        scales: {
            y: {
                min: (Math.floor(climaDias.media1) - 3),   // Mínimo del eje y, incluyendo datos negativos
                max: (Math.floor(climaDias.media5) + 3),    // Máximo del eje y
                ticks: {
                    stepSize: 1  // pasos
                }
            }
        }
    };

    return (
        <div className="bg-white bg-opacity-20 rounded-2xl">
            <Line data={data} options={opciones} />;
        </div>
    )
}