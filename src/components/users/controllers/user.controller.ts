import { Request, response, Response } from 'express';
import { IResponse } from '../../../interfaces/IResponse';
import { HttpStatusCodeEnum } from '../../../enums/HttpStatusCodeEnum';
import { HttpResponseMessageEnum } from '../../../enums/HttpResponseMessageEnum';

import { users } from '../../../utils/mocks/user.mock';

export default class UserController {
  constructor() {}

  async getUserList(req: Request, res: Response): Promise<Response> {
    const response: IResponse = {
      statusCode: HttpStatusCodeEnum.GET,
      message: HttpResponseMessageEnum.GET_LIST_SUCCESS,
      data: users,
    };

    return res.status(HttpStatusCodeEnum.GET).json(response);
  }

  async getUserById(req: Request, res: Response): Promise<Response> {
    const response: IResponse = {
      statusCode: HttpStatusCodeEnum.GET,
      message: HttpResponseMessageEnum.GET_DETAIL_SUCCESS,
      data: users[0],
    };

    return res.status(HttpStatusCodeEnum.GET).json(response);
  }
}
