import React, { useEffect, useState } from 'react';
import { useServicios } from '../context/ServContext';
import DiseñoServicios from '../components/diseñoServicios'; 

function ProfilePage() {
  const { getServicios, servicios } = useServicios();
  const [filtro, setFiltro] = useState('todos');

  useEffect(() => {
    getServicios();
  }, [getServicios]);

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  const serviciosFiltrados = servicios.filter((servicio) => {
    if (filtro === 'todos') {
      return true;
    } else {
      return servicio.rol === filtro;
    }
  });

  if (servicios.length === 0) {
    return <h1>No hay servicios</h1>;
  }

  return (
    <div className='text-center'>
      <h1 className="text-xl font-bold mb-4">Servicios</h1>

      <div className="mb-4 p-4 border rounded-lg shadow-md text-center">
        <h1 className="text-xl font-bold mb-4 text-white">Filtrar Servicios</h1>
        <div className="flex items-center justify-center space-x-4">
          <label className="inline-flex items-center text-white">
            <input
              type="radio"
              value="todos"
              checked={filtro === 'todos'}
              onChange={handleFiltroChange}
              className="mr-2 text-white"
            />
            <span className="text-white">Todos</span>
          </label>
          <label className="inline-flex items-center text-white">
            <input
              type="radio"
              value="persona"
              checked={filtro === 'persona'}
              onChange={handleFiltroChange}
              className="mr-2 text-white"
            />
            <span className="text-white">Persona</span>
          </label>
          <label className="inline-flex items-center text-white">
            <input
              type="radio"
              value="empresa"
              checked={filtro === 'empresa'}
              onChange={handleFiltroChange}
              className="mr-2 text-white"
            />
            <span className="text-white">Empresa</span>
          </label>
        </div>
      </div>


      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
        
        {serviciosFiltrados.map((servicio) => (
          <DiseñoServicios servicio={servicio} filtro={filtro} key={servicio.id} />
        ))}
      </div>

    </div>
  );
}

export default ProfilePage;
