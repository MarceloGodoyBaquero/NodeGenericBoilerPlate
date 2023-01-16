import {Router} from 'express'
import {signInUser, signUpUser} from '../controllers/auth.controllers'

const router = Router()

router.post('/signup', signUpUser)

router.post('/signin', signInUser)

export default router