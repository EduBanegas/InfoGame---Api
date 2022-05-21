import { Router } from 'express'
import routesRegister from './register.routes'

const router = Router()

router.get('/', (_req, res) => { res.send('Welcome to api') })
router.use('/register', routesRegister)

export default router
