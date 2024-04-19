import BaseError from './BaseError.js';

class BadRequest extends BaseError {
   constructor(error, message) {
      super(400, message, error);
   }
}

export default BadRequest;
