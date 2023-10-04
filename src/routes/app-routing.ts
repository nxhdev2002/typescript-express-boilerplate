import { getUsers } from '@/controllers/userController'
import { Router } from 'express'
import { isAuthenticatedUser } from '@/middlewares/auth'

const userRouters = Router()

userRouters.route('/users').get(isAuthenticatedUser, getUsers)

export default userRouters
