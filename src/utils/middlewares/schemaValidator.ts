import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import boom from '@hapi/boom';

function joiValidation(incomingData: any, schema: joi.ObjectSchema) {
  const { error } = schema.validate(incomingData);
  return error;
}

export const validateSchemaBody = (schema: joi.ObjectSchema) => {
  return function (req: Request, res: Response, next: NextFunction) {
    const error = joiValidation(req.body, schema);

    if (error) {
      res
        .status(boom.badRequest().output.statusCode)
        .json({ message: error.message });
    } else {
      next();
    }
  };
};

export const validateSchemaParams = (schema: joi.ObjectSchema) => {
  return function (req: Request, res: Response, next: NextFunction) {
    const error = joiValidation(req.params, schema);

    if (error) {
      res
        .status(boom.badRequest().output.statusCode)
        .json({ message: error.message });
    } else {
      next();
    }
  };
};

export const validateSchemaQueryParams = (schema: joi.ObjectSchema) => {
  return function (req: Request, res: Response, next: NextFunction) {
    const error = joiValidation(req.query, schema);

    if (error) {
      res
        .status(boom.badRequest().output.statusCode)
        .json({ message: error.message });
    } else {
      next();
    }
  };
};

export const validateSchemaHeaders = (schema: joi.ObjectSchema) => {
  return function (req: Request, res: Response, next: NextFunction) {
    const error = joiValidation(req.headers, schema);

    if (error) {
      res
        .status(boom.badRequest().output.statusCode)
        .json({ message: error.message });
    } else {
      next();
    }
  };
};
