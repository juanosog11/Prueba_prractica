import { useState } from "react";
import { createContext, useContext } from "react";

import {getServiciosapi,getServicioapi,createServiciosapi,updateServicios,deleteServicios} from "../api/Serv"


const ServicioContext = createContext();

export const useServicios = () => {
    const context = useContext(ServicioContext);

    if (!context) {
        throw new Error("ServicioContext must be used within a ServiciosProvider")
    }

    return context;
}



export function ServicioProvider({ children }) {

    const [servicios, setServicios] = useState([]);



    const getServicios = async () => {
        try {
            const res = await getServiciosapi();
            

            // Solo actualiza si los datos son diferentes
            if (JSON.stringify(res.data) !== JSON.stringify(servicios)) {
                setServicios(res.data);
            }
        } catch (error) {
            console.error(error);
        }
    };


    const createServicios = async (servicio) => {
        
        try {
            
            const res = await createServiciosapi(servicio);
        console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteServicio = async (id) => {
        try {
            
            const res = await deleteServicios(id);
            
            
            if (res.status === 204) {
                setServicios(servicios.filter(servicios => servicios.id !== id))
            }
            
        } catch (error) {
            console.error(error);
        }
    };

    const getServicio = async (id) => 
    {
        try {
            const res = await getServicioapi(id);
            
            return res.data
        } catch (error) {
            console.error(error);
        }

    }

    const updateServicio = async (id,servicio) => {
        try {
            const res = await updateServicios(id,servicio)
            
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <ServicioContext.Provider
            value={{
                servicios, createServicios, getServicios, setServicios, deleteServicio,getServicio,updateServicio
            }}>
            {children}
        </ServicioContext.Provider>
    );
}