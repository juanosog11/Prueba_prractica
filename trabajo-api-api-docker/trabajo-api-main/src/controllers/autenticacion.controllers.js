
import { pool } from '../db.js'
import { encryptPassword, desencryptPassword } from './encrypt.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'



export const register = async (req, res) => {
    const { nombre, apellido, email, telefono, contrasena, rol, rut, razon_social } = req.body

    try {

        

        const [rows2] = await pool.query("SELECT * FROM usuario WHERE email = ?", [email])

        if (rows2.length <= 0) {

            const contrasena2 = await encryptPassword(contrasena);

            if (rol == null) {
                

                const [rows] = await pool.query(
                    'INSERT INTO usuario (nombre, apellido, email, telefono, contrasena, rol, rut, razon_social) VALUES (?,?,?,?,?,?,?,?)',
                    [nombre, apellido, email, telefono, contrasena2, rol2, rut, razon_social]
                );



            }
            else {
                const [rows] = await pool.query(
                    'INSERT INTO usuario (nombre, apellido, email, telefono, contrasena, rol, rut, razon_social) VALUES (?,?,?,?,?,?,?,?)',
                    [nombre, apellido, email, telefono, contrasena2, rol, rut, razon_social]
                );




            }

            const [rows2] = await pool.query("SELECT * FROM usuario WHERE email = ?", [email])

            const id = rows2[0].email

            const token = jwt.sign({ id: id }, config.SECRET, { expiresIn: 86400 })
            res.cookie("token", token)
            res.json({ mes: "usuario creado", token: token })



        }
        else {
            return res.status(400).json(['el correo ya existe'])
        }


    } catch (error) {
        return res.status(500).json({
            error: "Error getting employees"
        })
    }




}


export const signin = async (req, res) => {

    

    const { email, contrasena } = req.body

    try {


        const [rows2] = await pool.query("SELECT * FROM usuario WHERE email = ?", [email])



        if (rows2.length > 0) {
            const iguales = await desencryptPassword(contrasena, rows2[0].contrasena);

            if (!iguales) {
                return res.status(401).json({ token: null, message: 'invalid password' })

            }

            const id = rows2[0].email


            const token = jwt.sign({ id: id }, config.SECRET, { expiresIn: 86400 })


            res.status(200).json({ token: token })



        }
        else {
            res.send('user exist')
        }
    } catch (error) {
        return res.status(500).json({
            error: "Error getting employees"
        })
    }

}

export const login = async (req, res) => {
    
    const { email, contrasena } = req.body

    try {


        const [rows2] = await pool.query("SELECT * FROM usuario WHERE email = ?", [email])



        if (rows2.length > 0) {
            const iguales = await desencryptPassword(contrasena, rows2[0].contrasena);

            if (!iguales) {
                return res.status(401).json({ token: null, message: 'invalid password' })

            }

            const id = rows2[0].email


            const token = jwt.sign({ id: id }, config.SECRET, { expiresIn: 86400 })

            res.cookie("token", token)
            res.json({ mes: "login exitoso", token: token })


        }
        else {
            res.send('user exist')
        }
    } catch (error) {
        return res.status(500).json({
            error: "Error getting employees"
        })
    }

}


export const logout = async (req, res) => {
    res.cookie('token', "", { expires: new Date(0) })
    return res.status(200)
}


export const profile = async (req, res) => {

    try {

        const [rows] = await pool.query('SELECT * FROM usuario');
        res.send({ rows })

    } catch (error) {
        return res.status(500).json({
            error: "Error getting user"
        })
    }

}

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    
    
    
    try {


        if (!token) {
            
            return res.status(401).json({ message: 'Unauthorized' })
        };

    
        jwt.verify(token, config.SECRET, async (err, user) => {
            if (err) {
                
                return res.status(401).json({ message: 'No autorizado' })
            }
            

            const [rows2] = await pool.query("SELECT * FROM usuario WHERE email = ?", [user.id])
            
            if (rows2.length <= 0) {
                
                return res.status(401).json({ message: 'No autorizado' })
            }
            else {
                return res.json({

                    nombre: rows2[0].nombre,
                    apellido: rows2[0].apellido,
                    email: rows2[0].email


                })
            }
        })

    } catch (error) { 
        res.status(400).json({message:'fallo la verificacion'})
    }
}
