import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { fetchClimaData } from './api';


function App() {
  const [climaData, setClimaData] = useState(null);

  useEffect(() => {
    const getClimaData = async () => {
      const data = await fetchClimaData();
      setClimaData(data);
    };

    getClimaData();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 flex items-center justify-center gap-4">
      <div className="bg-white bg-opacity-20 p-8 rounded-2xl shadow-2xl backdrop-blur-md border-t border-b border-blue-200">
        <h1 className="text-2xl font-bold text-blue-900">Segundo Div</h1>
        <p className="mt-4 text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="bg-white bg-opacity-20 p-8 rounded-2xl shadow-2xl backdrop-blur-md border-t border-b border-blue-200">
        <h1 className="text-7xl text-center font-bold text-blue-900">
          {climaData !== null ? `${climaData.temp}°C` : 'Obteniendo Datos...'}
        </h1>
        <div className='flex flex-col items-center justify-center'>
          <img className='max-w-full size-28 ' src="https://img.icons8.com/3d-fluency/94/storm.png" alt="Weather Icon" />
          <p className='text-2xl font-bold text-white '>{climaData !== null ? `${climaData.description.toUpperCase()}` : 'Obteniendo Datos...'}</p>
        </div>
        <div>
          <article>
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-droplet-percent" rotation={0} style={{color: "#1e4a94",}} />
          </article>
          <article>

          </article>
          <article>

          </article>
        </div>

        <p className="text-blue-800">
          {climaData ? 
           `Humedad: ${climaData.humidity}% \n
            Velocidad del viento: ${climaData.windSpeed} m/s` : 
           'Obteniendo Datos...'}
        </p>
      </div>
    </section>
  );
}

export default App;
