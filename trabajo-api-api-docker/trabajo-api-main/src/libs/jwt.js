import config from '../config.js'
import jwt from 'jsonwebtoken'

export function createAccessToken(payload) 
{
    return new Promise((resolve, reject) => {
        

        const token = jwt.sign(payload ,config.SECRET, { expiresIn: 86400 },(err,token) => { 
            if (err) reject(err)
            resolve(token)
        }
        
    )
    
        
        
        
    })
}