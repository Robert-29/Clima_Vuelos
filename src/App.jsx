import { useState, useEffect } from 'react';
import { fetchClimaData } from './apis/api';
//import { fetchDiasData } from './apis/dias';
// import { miUbicacionClima } from "./apis/miUbicaciónClima";


function App() {
  //datos de clima
  const [climaData, setClimaData] = useState(null);

  useEffect(() => {
    const getClimaData = async () => {
      const data = await fetchClimaData();
      setClimaData(data);
    };

    getClimaData();
  }, []);

  //datos de clima por 4 dias
  // const [climaDias, setClimaDias] = useState(null);

  // useEffect(() => {
  //   const getClimaDias = async () => {
  //     const data = await fetchDiasData();
  //     setClimaDias(data);
  //   };

  //   getClimaDias();
  // }, []);

  //Clima actual de mi ubicación
  // const [miClima, setmiClima] = useState(null);

  // useEffect(() => {
  //   const getmiClima = async () => {
  //     const data = await miUbicacionClima();
  //     setmiClima(data);
  //   };

  //   getmiClima();
  // }, []);



  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 flex items-center justify-center gap-4">
      <div className="bg-white bg-opacity-20 p-8 rounded-2xl shadow-2xl backdrop-blur-md border-t border-b border-blue-200">
        <h1 className="text-2xl font-bold text-blue-900"> ada </h1>
        {/* <p className="mt-4 text-blue-800"> {miClima !== null ? `${miClima.temp}` : 'Obteniendo nombre...'}</p> */}
      </div>

      <div className="bg-white bg-opacity-20 p-8 rounded-2xl shadow-2xl backdrop-blur-md border-t border-b border-blue-200">
        <div className="flex justify-between ">
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
    </section>
  );
}

export default App;