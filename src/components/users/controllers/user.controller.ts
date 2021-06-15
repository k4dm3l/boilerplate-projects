import { Request, response, Response } from 'express';
import { IResponse } from '../../../Interfaces/IResponse';
import { HttpStatusCodeEnum } from '../../../Enums/HttpStatusCodeEnum';
import { HttpResponseMessageEnum } from '../../../Enums/HttpResponseMessageEnum';

export default class UserController {
  constructor() {}

  async getUserList(req: Request, res: Response): Promise<Response> {
    const response: IResponse = {
      statusCode: HttpStatusCodeEnum.GET,
      message: HttpResponseMessageEnum.GET_LIST_SUCCESS,
      data: [],
    };

    return res.status(HttpStatusCodeEnum.GET).json(response);
  }
}
