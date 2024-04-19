import BaseError from './BaseError.js';

class ConflictRequest extends BaseError {
   constructor(error, message) {
      super(409, message, error);
   }
}

export default ConflictRequest;
