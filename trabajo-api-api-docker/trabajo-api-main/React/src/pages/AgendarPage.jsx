import React, { useEffect } from 'react'
import { useAuth } from '../context/Authcontext'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useServicios } from '../context/ServContext'

function AgendarPage() {
  const { user } = useAuth()
  
  const email = user.email
  const { register, handleSubmit, setValue } = useForm();
  const { esEmpresa, setEsEmpresa } = useAuth();
  const { createServicios, getServicio, updateServicio } = useServicios()
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadServicio() {
      if (params.id) {
        try {
          const servicio = await getServicio(params.id);

          
          setValue('fecha', servicio.fecha.split('T')[0]); 
          setValue('hora', servicio.hora);
          setValue('recorrido', servicio.recorrido);
          setValue('rol', servicio.rol);

          
          if (servicio.rol === 'empresa') {
            setEsEmpresa(true);
            setValue('ceco', servicio.Ceco);
          } else {
            setEsEmpresa(false);
            setValue('ceco', ''); 
          }
        } catch (error) {
          console.error('Error al cargar el servicio:', error);
        }
      }
    }

    loadServicio();
  }, [params.id, getServicio, setValue, setEsEmpresa]);





  const onSubmit = handleSubmit(async (value) => {
    if (params.id) {
      updateServicio(params.id, value)
    } else {
      
      createServicios(value);

    }
    navigate('/servicios')
  });

  const handleTipoUsuarioChange = (e) => {
    setEsEmpresa(e.target.value === 'empresa');
  }

  return (
    <div className='flex flex-col items-center h-[calc(100vh-100px)] min-w-min justify-center'>

      <form onSubmit={onSubmit} className="text-center m-auto">


        <input type="date" placeholder="Fecha" className='w-full bg-zinc- bg-slate-400 placeholder-black text-white px-6 py-2 rounded-md my-3'
          {...register('fecha', { required: true })}

        />
        <input type="time" placeholder="Hora" className='w-full bg-zinc- bg-slate-400 placeholder-black text-white px-6 py-2 rounded-md my-3'
          {...register('hora', { required: true })}
        />

        <div className="flex justify-between m-4 items-center">

          <div className='relative mr-10'>
            <input
              type="radio"
              value="persona"
              name="tipoUsuario"
              {...register('rol', { required: true })}
              onChange={handleTipoUsuarioChange}
              checked={!esEmpresa}

            />
            <label htmlFor="persona" className="relative ">Persona</label>

          </div>

          <div>
            <input

              type="radio"
              value="empresa"
              name="tipoUsuario"
              {...register('rol', { required: true })}
              onChange={handleTipoUsuarioChange}
              checked={esEmpresa}

            />
            <label htmlFor="empresa" className="relative">Empresa</label>

          </div>


        </div>

        
        {esEmpresa && (
          <>

            <input
              type="text"
              {...register('ceco', { required: true })}
              placeholder='Centro ce costos'
              className='w-full bg-zinc- bg-slate-400 placeholder-black px-6 py-2 rounded-md my-3'
            />
            

          </>

        )}

        <textarea rows="3" placeholder="Recorrido" className='w-full bg-zinc- bg-slate-400 placeholder-black text-white px-6 py-2 rounded-md my-3'
          {...register('recorrido', { required: true })}
        ></textarea>

        <button type="submit" className="bg-slate-400 text-white px-4 py-2 rounded-full border border-white m-4">
          Agendar
        </button>

      </form>


    </div>
  )
}

export default AgendarPage