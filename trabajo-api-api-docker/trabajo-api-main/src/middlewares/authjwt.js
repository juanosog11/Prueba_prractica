import  jwt  from "jsonwebtoken";
import config from '../config.js';
import { pool } from '../db.js';

export const verifytoken = async (req,res,next) =>{
    
    const {token} = req.cookies;
    
    try {

    if (!token) {
        return res.status(403).json({message:'No token provided'})
    } 

    const decoded = jwt.verify(token,config.SECRET)
    req.email=decoded.id
    const email = decoded.id
    
        
    
        const [rows] = await pool.query("SELECT * FROM usuario WHERE email = ?", [email])

        if (rows.length <= 0) {
            return res.status(404).json({message:'user not found' })
        }
        else {
            
            next()
        }

    
    } catch (error) {
        return res.status(500).json([
            "unauthorized"
        ])
    }


    

}

