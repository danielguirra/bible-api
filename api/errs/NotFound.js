import BaseError from './BaseError.js';

class NotFoundRequest extends BaseError {
   constructor(error, message) {
      super(404, message, error);
   }
}

export default NotFoundRequest;
