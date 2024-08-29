export function Buscador() {
    return (
        <div className="w-[50%] h-20 mb-3 bg-white bg-opacity-20 flex  justify-around items-center rounded-2xl shadow-2xl backdrop-blur-md border-t border-b border-blue-200">
            <span className="flex" >
                <h2 className="text-blue-900 text-2xl font-bold" >Tipo de búsqueda:</h2>
                <select className="bg-transparent border-b border-white text-white font-bold ml-2 outline-none" name="seleccion" id="#">
                    <option className="text-gray-700" value="ciudad">Ciudad</option>
                    <option className="text-gray-700" value="codigo">Código IATA</option>
                    <option className="text-gray-700" value="numero">Número de vuelo</option>
                </select>
            </span>
            <div className="flex bg-white p-1 rounded-2xl" >
                <input className="text-gray-600 bg-transparent outline-none" type=" text" placeholder="Ciudad..." />
                <img src="../../public/svg/lupa.svg" alt="Lupa" />
            </div>
        </div>
    )
}