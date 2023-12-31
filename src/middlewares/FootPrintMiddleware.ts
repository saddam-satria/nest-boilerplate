import { Injectable, NestMiddleware } from '@nestjs/common';
import { AllowedIP } from 'src/config/constant';
import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '@nestjs/common';
import BaseResponse from 'src/components/BaseResponse';
import AbstractService from 'src/components/AbstractService';

@Injectable()
class FootPrintMiddleware extends AbstractService implements NestMiddleware {
  private allowedIP: string[] = AllowedIP;
  use(req: Request, res: Response, next: NextFunction) {
    const reqIP = req.ip;

    if (this.allowedIP.length === 0) {
      return next();
    }

    if (this.allowedIP.includes(reqIP)) {
      return next();
    }

    return res
      .status(HttpStatus.BAD_REQUEST)
      .json(
        BaseResponse.error<null>(
          HttpStatus.FORBIDDEN,
          this.getMessage('NOT_ALLOWED'),
          null,
        ),
      );
  }
}

export default FootPrintMiddleware;
