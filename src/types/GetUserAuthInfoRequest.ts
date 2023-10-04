import type User from '@/models/User'
import { type Request } from 'express'
export interface GetUserAuthInfoRequest extends Request {
  user: User | null // or any other type
}
