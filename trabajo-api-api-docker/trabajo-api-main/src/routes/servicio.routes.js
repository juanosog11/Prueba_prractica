import { Router } from 'express';
import * as servicio_ctrl from '../controllers/servicios.controllers.js'
import * as auten from '../middlewares/index.js'

const router = Router();


router.get('/servicios', auten.verifytoken ,servicio_ctrl.getServicios)


router.get('/agendar/:id', auten.verifytoken, servicio_ctrl.getServicioId)

router.post('/agendar',auten.verifytoken, servicio_ctrl.crearServicio)

router.put('/agendar/:id',auten.verifytoken, servicio_ctrl.actualizarServicio)

router.delete('/servicios/:id',auten.verifytoken,servicio_ctrl.borrarServicio)

export default router;