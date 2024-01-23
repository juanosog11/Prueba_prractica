import axios from './axios.js'

export const getServiciosapi = () => axios.get("/servicios")

export const getServicioapi = (id) => axios.get(`/agendar/${id}`)

export const createServiciosapi = serv => {axios.post("/agendar",serv)}

export const updateServicios = (id,serv) => axios.put(`/agendar/${id}`,serv)

export const deleteServicios = (id) => axios.delete(`/servicios/${id}`)


