import catchAsyncError from '@/middlewares/catchAsyncError'
import User from '@/models/User'
import { type HttpResponse } from '@/types/HttpResponse'
import { type Request, type Response } from 'express'

export const getUsers = catchAsyncError(async (req: Request, res: Response): Promise<void> => {
  const users = await User.findAll()
  const resp: HttpResponse<User[]> = {
    status: 200,
    message: 'Fetched users successfully',
    data: users
  }

  res.send(resp)
})
