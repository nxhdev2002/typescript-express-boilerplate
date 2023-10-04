import { getUsers } from '@/controllers/userController'
import { Router } from 'express'

const userRouters = Router()

userRouters.route('/').get(getUsers)

export default userRouters
