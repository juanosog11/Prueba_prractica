import { Link } from "react-router-dom"
import { useAuth } from "../context/Authcontext"

function Navbar() {

  const { isAutheticated, logout, user } = useAuth()
  

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to='/'>
        <h1 className="text-2xl font-bold"> Servitrayectos</h1>
      </Link>
      {isAutheticated ? (<>
        <div className="flex items-center text-xl mx-4">

          Bienvenido {user.nombre} {user.apellido}

        </div>
      </>

      ) : (<></>)}
      <ul className="flex gap-x-2">
        {isAutheticated ? (
          <>
            <li>
              <Link to='/agendar'
                className="bg-indigo-500 px-4 py-1 rounded-sm">
                Agendar
              </Link>
            </li>
            <li>
              <Link to='/servicios'>
                Servicios
              </Link>
            </li>
            <li>
              <Link to='/'
                onClick={() => { logout() }}
                className="bg-red-500 px-4 py-1 rounded-sm">
                Salir
              </Link>
            </li>
          </>
        ) : (

          <>
            <li>
              <Link to='/login'
                className="bg-indigo-500 px-4 py-1 rounded-sm"
              >
                Aceder
              </Link>
            </li>
            <li>
              <Link to='/register'
                className="bg-indigo-500 px-4 py-1 rounded-sm">
                Registrar
              </Link>
            </li>
          </>
        )}
      </ul>

    </nav>
  )
}

export default Navbar