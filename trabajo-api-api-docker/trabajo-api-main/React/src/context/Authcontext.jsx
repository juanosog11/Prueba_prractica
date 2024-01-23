
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth';
import { createContext, useState, useContext, useEffect } from "react";
import Cookies from 'js-cookie';


export const Authcontext = createContext()
var errores = null
export const useAuth = () => {
    const context = useContext(Authcontext)
    if (!context) {
        throw new Error('useAuth must be used within a Authcontext')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAutheticated, setAutheticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [esEmpresa, setEsEmpresa] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);


    const signup = async (user) => {
        try {
            
            const res = await registerRequest(user);
            
            setUser(user)

            
            setAutheticated(true);
        } catch (error) {

            if (Array.isArray(error.response.data.errors)) {
                console.log(error.response.data.errors)
                return setErrors(error.response.data.error)
            }
            else {
                console.log(error)
                return setErrors([error.response.data])
            }
        }
    }


    const signin = async (user) => {
        try {
            
            
            const res = await loginRequest(user);
            
            setUser(user)
            
            setAutheticated(true);
        } catch (error) {
            if (Array.isArray(error.response.data.errors)) {
                console.log(error.response.data.errors)
                return setErrors(error.response.data.error)
            }
            else {
                console.log(error)
                return setErrors([error.response.data])
            }

        }
    }

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const checkLogin = async () => {

            const cookies = Cookies.get();
            try {
                if (!cookies.token) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;

                }

                
                const res = await verifyTokenRequest(cookies.token);
                

                if (!res.data) {
                    return setIsAuthenticated(false);

                }
                setAutheticated(true);
                setUser(res.data);
                setLoading(false);
                

                return;

            } catch (error) {
                setAutheticated(false);
                setLoading(false);

                return;
            }
        };
        checkLogin();

    }, []);


    return (

        <Authcontext.Provider
            value=
            {{ user, signup, signin, logout, setUser, isAutheticated, errors, esEmpresa, setEsEmpresa, loading, setLoading }}
        >
            {children}
        </Authcontext.Provider>

    )
}