import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';
import env from '../../configs';

export const withErrorStack = (err: any, stack: any) => {
  if (env.environment !== 'production') {
    return { err, stack };
  }

  return err;
};

export const notFoundHandler = (req: Request, res: Response) => {
  const {
    output: { statusCode, payload },
  } = boom.notFound();

  res.status(statusCode).json(payload);
};

export const wrapErrors = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  !err.isBoom ? next(boom.badImplementation(err)) : next(err);
};

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    output: { statusCode, payload },
  } = err;

  res
    .status(statusCode)
    .json(withErrorStack({ ...payload, data: err.data || null }, err.stack));
};
