import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  get(): string {
    return 'welcome to jaket boat backend';
  }
}

export default AppService;
