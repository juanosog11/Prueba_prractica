import { pool } from '../db.js'


export const getServicios = async (req, res) => {
    const email = req.email
    

    try {

        const [rows] = await pool.query('SELECT * FROM servicio WHERE email = ?', [email]);
        console.log(rows)

        res.send(rows)

    } catch (error) {
        return res.status(500).json({
            error: "Error getting user"
        })
    }

};


export const getServicioId = async (req, res) => {

    const { id } = req.params;

    try {
        const [rows] = await pool.query("SELECT * FROM servicio WHERE id = ?", [id])


        if (rows.length <= 0) {
            return res.status(404).json({ message: 'user not found' })
        }
        else {
            res.send(rows[0])
        }

    } catch (error) {
        return res.status(500).json({
            error: "Error getting user"
        })
    }
};

export const crearServicio = async (req, res) => {
    const { fecha, hora, rol, ceco, recorrido } = req.body
    const email = req.email
    console.log(email)

    try {
        console.log("error en el insertar")
        const [rows] = await pool.query(
            'INSERT INTO servicio (fecha,hora,rol,ceco,recorrido,email) VALUES(?,?,?,?,?,?)',
            [fecha, hora, rol, ceco, recorrido, email]
        );
        console.log(rows)

        res.send({
            fecha, hora, rol, ceco, recorrido, email, rows

        })

    } catch (error) {
        return res.status(500).json({
            error: "Error getting user"
        })
    }
};


export const actualizarServicio = async (req, res) => {

    const { id } = req.params;
    
    const { fecha, hora, rol, ceco, recorrido, email } = req.body;
    
    try {
        console.log("entre al try")
        const [result] = await pool.query(
            "UPDATE servicio SET Ceco = IFNULL(?, Ceco), fecha = IFNULL(?, fecha), hora = IFNULL(?, hora), rol = IFNULL(?, rol), recorrido = IFNULL(?, recorrido), email = IFNULL(?, email) WHERE id = ?",
            [ceco, fecha, hora, rol, recorrido, email, id]

        );

        

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "service not found" });
        }

        const [rows] = await pool.query("SELECT * FROM servicio WHERE id = ?", [id]);

        res.json(rows);
    } catch (error) {
        console.log("cath")
        return res.status(500).json({
            error: "error updating service"
        });
    }

};

export const borrarServicio = async (req, res) => {
    const { id } = req.params;

    try {
        console.log("estoy en el back")
        const [result] = await pool.query("DELETE FROM servicio WHERE id = ?", [id]);

        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: 'Service not found' });
        } else {
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({
            error: "Error deleting service"
        });
    }


};

