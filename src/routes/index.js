import {Router} from 'express'
import authRoutes from "./auth.routes";
const router = Router()

router.use('/', authRoutes)
//nuevas rutas

export default router