import {Router} from 'express'
import * as controllers from '../controllers/itemControllers.js'
const router = Router()

router.get('/', controllers.index)

export default router 