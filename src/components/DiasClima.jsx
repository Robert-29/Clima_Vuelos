import { useState, useEffect } from 'react';
import { fetchDiasData } from "../apis/dias";

export function DiasClima(){
    const [climaDias, setClimaDias] = useState(null);
    useEffect(() => {
        const getClimaDias = async () => {
            const data = await fetchDiasData();
            setClimaDias(data);
        };
        getClimaDias();
    }, []);

    return(
        <section className='bg-white bg-opacity-20 flex flex-col  justify-center rounded-2xl shadow-2xl backdrop-blur-md border-t border-b border-blue-200 mt-3' >
            <h1 className='text-blue-900 text-3xl font-bold mt-3 mb-3 ml-5' >Próximos 5 días</h1>
            <div className="bg-white bg-opacity-20 h-20 flex justify-evenly items-center">
                <p className='text-5xl font-bold text-blue-900' >{climaDias !== null ? `${Math.floor(climaDias.media1)} °C` : '00'} </p>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/humedad.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.humedad)} %` : '00'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/viento.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.viento)} m/s` : '00'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/presion.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.presion)} hPa` : '00'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/presipitacion.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null && climaDias.presipitacion == 1 ? `100 %` : '0%'} </p>
                </article>
                <img className='size-20 ' src="https://img.icons8.com/3d-fluency/94/storm.png" alt="Weather Icon" />
            </div>

            <div className="h-20 flex justify-evenly items-center">
                <p className='text-5xl font-bold text-blue-900' >{climaDias !== null ? `${Math.floor(climaDias.media2)} °C` : '00'} </p>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/humedad.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.humedad2)} %` : '00'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/viento.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.viento2)} m/s` : '00'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/presion.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.presion2)} hPa` : '00'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/presipitacion.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null && climaDias.presipitacion2 == 1 ? `100 %` : '0%'} </p>
                </article>
                <img className='size-20 ' src="https://img.icons8.com/3d-fluency/94/storm.png" alt="Weather Icon" />
            </div>

            <div className="bg-white bg-opacity-20 h-20 flex justify-evenly items-center">
                <p className='text-5xl font-bold text-blue-900' >{climaDias !== null ? `${Math.floor(climaDias.media3)} °C` : '00'} </p>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/humedad.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.humedad3)} %` : '00'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/viento.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.viento3)} m/s` : '00'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/presion.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.presion3)} hPa` : '00'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/presipitacion.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null && climaDias.presipitacion3 == 1 ? `100 %` : '0%'} </p>
                </article>
                <img className='size-20 ' src="https://img.icons8.com/3d-fluency/94/storm.png" alt="Weather Icon" />
            </div>

            <div className="h-20 flex justify-evenly items-center">
                <p className='text-5xl font-bold text-blue-900' >{climaDias !== null ? `${Math.floor(climaDias.media4)} °C` : '00'} </p>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/humedad.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.humedad4)} %` : '00'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/viento.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.viento4)} m/s` : '00'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/presion.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.presion4)} hPa` : '00'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/presipitacion.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null && climaDias.presipitacion4 == 1 ? `100 %` : '0%'} </p>
                </article>
                <img className='size-20 ' src="https://img.icons8.com/3d-fluency/94/storm.png" alt="Weather Icon" />
            </div>

            <div className="bg-white bg-opacity-20 h-20 flex justify-evenly items-center">
                <p className='text-5xl font-bold text-blue-900' >{climaDias !== null ? `${Math.floor(climaDias.media5)} °C` : '00'} </p>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/humedad.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.humedad5)} %` : '0%'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/viento.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.viento5)} m/s` : '0%'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/presion.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null ? `${Math.floor(climaDias.presion5)} hPa` : '0%'} </p>
                </article>
                <article className='flex flex-col justify-center items-center' >
                    <img className='size-7' src="../../public/svg/presipitacion.svg" alt="" />
                    <p className='text-2xl' >{climaDias !== null && climaDias.presipitacion5 == 1 ? `100 %` : '0%'} </p>
                </article>
                <img className='size-20 ' src="https://img.icons8.com/3d-fluency/94/storm.png" alt="Weather Icon" />
            </div>
        </section>
    )
}