import { type HttpResponse } from '@/types/HttpResponse'
import type ErrorHandler from '@/utils/ErrorHandler'
import { type NextFunction, type Request, type Response } from 'express'

export = (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  err.statusCode = err.statusCode || 500

  if (process.env.NODE_ENV === 'DEVELOPMENT') {
    const resp: HttpResponse<string> = {
      status: err.statusCode,
      message: err.message,
      data: err.stack
    }

    res.status(err.statusCode).json(resp)
  }

  if (process.env.NODE_ENV === 'PRODUCTION') {
    const resp: HttpResponse<null> = {
      status: err.statusCode,
      message: err.message
    }

    res.status(err.statusCode).json(resp)
  }
}
