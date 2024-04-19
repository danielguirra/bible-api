import express from 'express';
class BaseRoute {
   routeName = '';
   router = express.Router();

   setRoutes(nameRoute, func) {
      this.router.get(nameRoute, func);
   }

   isString(string) {
      return typeof string == 'string';
   }

   isNumber(num) {
      return typeof num == 'number';
   }

   constructor(routeName) {
      this.routeName = routeName;
      this.isNumber = this.isNumber;
      this.isString = this.isString;
   }
}

export default BaseRoute;
