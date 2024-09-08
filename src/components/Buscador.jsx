import { useState, useEffect } from 'react';

export function Buscador() {
    const [opciones, setOpciones] = useState([]); // Estado para almacenar las opciones

    // Función para cargar el CSV
    useEffect(() => {
        fetch('../../public/data/ciudades.csv')  // Asegúrate de poner la ruta correcta
            .then(response => response.text())
            .then(data => {
                const opcionesCSV = data.split(','); // Dividir el CSV por comas
                setOpciones(opcionesCSV.map(opcion => opcion.trim())); // Guardar las opciones
            })
            .catch(error => console.error('Error al cargar el CSV:', error));
    }, []); // El efecto se ejecuta solo al montar el componente

    return (
        <div className="w-[50%] h-20 mb-3 mt-10 bg-white bg-opacity-20 flex justify-around items-center rounded-2xl shadow-2xl backdrop-blur-md border-t border-b border-blue-200">
            <span className="flex">
                <h2 className="text-blue-900 text-2xl font-bold">Tipo de búsqueda:</h2>
                <select className="bg-transparent border-b border-white text-white font-bold ml-2 outline-none cursor-pointer" name="seleccion">
                    <option className="text-gray-700" value="ciudad">Ciudad</option>
                    <option className="text-gray-700" value="codigo">Código IATA</option>
                    <option className="text-gray-700" value="numero">Número de vuelo</option>
                </select>
            </span>
            <div className="flex bg-white p-1 rounded-2xl">
                <input list="ciudades" className="text-gray-600 bg-transparent outline-none" type="text" placeholder="Ciudad..." />
                <img src="../../public/svg/lupa.svg" alt="Lupa" />
            </div>
            
            {/* Datalist con las opciones del CSV */}
            <datalist id="ciudades">
                {opciones.map((opcion, index) => (
                    <option key={index} value={opcion} />
                ))}
            </datalist>
        </div>
    );
}
