import express from 'express'; // diferrentes accesos por http
import autentication from './routes/autentication.routes.js';
import ping from './routes/index.routes.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import usuario from './routes/usuarios.routes.js'
import servicio from './routes/servicio.routes.js'



const app = express();

app.get('/',(req,res)=>{
  res.send('hello word')
})

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }

))
app.use(morgan('dev'))
app.use
app.use(express.json())
app.use(cookieParser())



app.use('/api', ping)
app.use('/api', autentication)
app.use('/api',usuario)

app.use('/api',servicio)





export default app;
