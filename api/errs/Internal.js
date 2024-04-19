import BaseError from './BaseError.js';

class InternalServerRequest extends BaseError {
   constructor(error, message) {
      super(500, message, error);
      console.error(new InternalServerRequest(error, message));
   }
}

export default InternalServerRequest;
