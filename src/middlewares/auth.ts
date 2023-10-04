import catchAsyncError from '@/middlewares/catchAsyncError'
import User from '@/models/User'
import { type GetUserAuthInfoRequest } from '@/types/GetUserAuthInfoRequest'
import ErrorHandler from '@/utils/ErrorHandler'
import { type Response, type NextFunction } from 'express'
import jwt, { type JwtPayload } from 'jsonwebtoken'

export const isAuthenticatedUser = catchAsyncError(async (req: GetUserAuthInfoRequest, res: Response, next: NextFunction) => {
  let bearerToken = ''
  const bearerHeader = req.headers.authorization

  if (typeof bearerHeader !== 'undefined') {
    bearerToken = bearerHeader.split(' ')[1]
  }

  if (bearerToken.length === 0) {
    next(
      new ErrorHandler('You must login to access this resource.', 401)
    ); return
  }

  const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET as string) as JwtPayload
  req.user = await User.findByPk(decoded.id)

  if (typeof req.user === 'undefined' || req.user === null) {
    next(
      new ErrorHandler('Contact admin for more infomation.', 400)
    ); return
  }

  next()
})
