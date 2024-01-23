import {useServicios} from '../context/ServContext'
import { Link } from "react-router-dom"

function diseñoServicios({ servicio, filtro }) {

    const {deleteServicio} = useServicios()
    

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <div className="text-slate-300">

                <header className="flex justify-between ">
                    <p>Id: {servicio.id}</p>
                    <div className="flex flex-col gap-y-2 items-center">
                        <button className='bg-red-500 hover:bg-red-600 text-white px-2 py-1' onClick={() => {
                            deleteServicio(servicio.id);
                        }}>delete</button>
                        <Link className='bg-blue-500 hover:bg-blue-600 text-white px-2 py-1' to={`/agendar/${servicio.id}`}>edit</Link>
                    </div>
                </header>
                <p className="border mt-4">Fecha: {new Date(servicio.fecha).toLocaleDateString()}</p>
                <p className="border">Hora: {servicio.hora}</p>
                <p className="border">Rol: {servicio.rol}</p>
                {filtro === 'empresa' && (
                    
                    <p className="border">Centro de Costos: {servicio.Ceco} </p> 
                )}
                <p className="border">Recorrido: {servicio.recorrido}</p>
                



            </div>


        </div>
    )
}

export default diseñoServicios