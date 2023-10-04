import { type NextFunction, type Request, type Response } from 'express'

export = (func: any) => async (req: Request, res: Response, next: NextFunction) =>
  await Promise.resolve(func(req, res, next)).catch(err => { next(err) })
