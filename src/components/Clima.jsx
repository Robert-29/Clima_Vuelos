import { useState, useEffect } from 'react';
import { fetchClimaData } from "../apis/api";

export function Clima() {
    const [climaData, setClimaData] = useState(null);

    useEffect(() => {
      const getClimaData = async () => {
        const data = await fetchClimaData();
        setClimaData(data);
      };
  
      getClimaData();
    }, []);

    return (
    <div className="w-[345px] h-[440px] bg-white bg-opacity-20 flex flex-col  justify-center rounded-2xl shadow-2xl backdrop-blur-md border-t border-b border-blue-200">
        <div className="flex justify-around ">
            <span className='flex' >
              <img src="../public/svg/ubicación.svg" alt="ubicacion-img" />
              <p className='font-bold text-gray-200' > {climaData !== null ? `${climaData.nombre}` : 'Obteniendo nombre...'} </p>
            </span>
            <p className='font-bold text-gray-200' > {climaData !== null ? `${climaData.country}` : '00...'} </p>
        </div>
        <h1 className="text-7xl text-center font-bold text-blue-900">
          {climaData !== null ? `${climaData.temp}°C` : 'Obteniendo Datos...'}
        </h1>
        <div className='flex flex-col items-center justify-center'>
            <img className='max-w-full size-28 ' src="https://img.icons8.com/3d-fluency/94/storm.png" alt="Weather Icon" />
            <p className='text-2xl font-bold text-white'>{climaData !== null ? `${climaData.description.toUpperCase()}` : 'Obteniendo Datos...'}</p>
        </div>
        <div className='flex items-start justify-evenly mt-5'>
            <article className='flex flex-col items-center justify-center' >
                <img className='size-8' src="../public/svg/humedad.svg" alt="IMG-Humedad" />
                <p> {climaData !== null ? `${climaData.humidity} %`: 'Obteniendo datos'} </p>
                <p>Humedad</p>
            </article>
            <article className='flex flex-col items-center justify-center' >
                <img className='size-8' src="../public/svg/viento.svg" alt="IMG-Viento" />
                <p> {climaData ? `${climaData.windSpeed} m/s` : 'Obteniendo Datos...'} </p>
                <p>Viento </p>
            </article>
        </div>
    </div>
    )
}