import { Injectable, NestMiddleware } from '@nestjs/common';
import { AllowedIP } from 'src/config/constant';
import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '@nestjs/common';
import BaseResponse from 'src/components/BaseResponse';

@Injectable()
class FootPrintMiddleware implements NestMiddleware {
  private allowedIP: string[] = AllowedIP;
  use(req: Request, res: Response, next: NextFunction) {
    const reqIP = req.ip;
    if (this.allowedIP.includes(reqIP)) {
      return next();
    }

    return res
      .status(HttpStatus.BAD_REQUEST)
      .json(
        BaseResponse.error<null>(
          HttpStatus.BAD_REQUEST,
          "you're not allowed",
          null,
        ),
      );
  }
}

export default FootPrintMiddleware;
