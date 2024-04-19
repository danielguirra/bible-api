import BaseError from './BaseError.js';

class UnauthorizedRequest extends BaseError {
   constructor(error, message) {
      super(401, message, error);
   }
}

export default UnauthorizedRequest;
