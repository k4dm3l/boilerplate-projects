import { number, object, ObjectSchema } from 'joi';

export const getUserByIdSchema: ObjectSchema = object().keys({
  id: number().integer().positive().allow(0).required,
});

export const getUserListWithFiltersSchema: ObjectSchema = object().keys({
  page: number().integer().positive().allow(0).required(),
});
