import catchAsyncError from '@/middlewares/catchAsyncError'
import User from '@/models/User'
import { type GetUserAuthInfoRequest } from '@/types/GetUserAuthInfoRequest'
import { type HttpResponse } from '@/types/HttpResponse'
import { type Response } from 'express'

export const getUsers = catchAsyncError(async (req: GetUserAuthInfoRequest, res: Response): Promise<void> => {
  const users = await User.findAll()
  const resp: HttpResponse<User[]> = {
    status: 200,
    message: 'Fetched users successfully',
    data: users
  }
  console.log(users[0].getJwtToken())
  res.send(resp)
})
