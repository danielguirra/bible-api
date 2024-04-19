class BaseError {
   status = 400;
   message = '';
   error = {};

   constructor(status, message, error) {
      this.status = status || 400;
      this.message = message;
      this.error = error;
   }
}

export default BaseError;
