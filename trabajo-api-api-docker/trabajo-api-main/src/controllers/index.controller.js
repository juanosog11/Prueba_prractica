import { pool } from '../db.js'



export const ping = async (req, res) => {
    console.log("voy a ejecutar ping")
    console.log("ejecutar ping")
    const [result] = await pool.query('SELECT "Pong" as result')
    res.send("Pong")
}
