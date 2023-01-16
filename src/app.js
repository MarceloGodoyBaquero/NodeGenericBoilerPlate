import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import apiRoutes from './routes'
import roleCreator from "./utils/roles.creator";

const app = express()

roleCreator()

//middlewares
app.use(helmet())
app.use(morgan('dev'))
app.use(cors('*'))
app.use(express.json())


//routes
app.use('/api', apiRoutes)

export default app