import { Controller, Get } from '@nestjs/common';
import AppService from 'src/services/AppService';

@Controller()
class AppController {
  constructor(private appService: AppService) {}
  @Get()
  public rootController(): string {
    return this.appService.get();
  }
}

export default AppController;
