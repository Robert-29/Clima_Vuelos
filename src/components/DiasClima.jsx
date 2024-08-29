import { useState, useEffect } from 'react';
import { fetchDiasData } from "../apis/dias";

export function DiasClima(){
    const [climaDias, setClimaDias] = useState(null);
    useEffect(() => {
        const getClimaDias = async () => {
            const data = await fetchDiasData();
            setClimaDias(data);
            console.log(data)
        };
        getClimaDias();
    }, []);

    return(
        <section className='bg-white bg-opacity-20 p-4 flex flex-col  justify-center rounded-2xl shadow-2xl backdrop-blur-md border-t border-b border-blue-200' >
            <h1>{climaDias !== null ? `${climaDias}` : '000'}</h1>
        </section>
    )
}