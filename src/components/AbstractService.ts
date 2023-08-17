import MessagesResponse from 'src/common/MessageProperties';

class AbstractService {
  getMessage(key: string) {
    return MessagesResponse(key);
  }
}

export default AbstractService;
