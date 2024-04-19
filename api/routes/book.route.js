import NotFoundRequest from '../errs/NotFound.js';
import BadRequest from '../errs/BadRequest.js';
import BookService from '../service/book.service.js';
import BaseRoute from './base.route.js';

class BookRoutes extends BaseRoute {
   constructor() {
      super('book');
      this.setRoutes('/name/:bookNameToSearch', this.getBookByName);
   }

   async getBookByName(req, res) {
      try {
         const { bookNameToSearch } = req.params;

         if (typeof bookNameToSearch !== 'string') {
            throw new BadRequest(
               { bookNameToSearch },
               'param its not string type'
            );
         }
         const bookService = new BookService();

         const bookSearched = await bookService.getBookByName(bookNameToSearch);

         if (!bookSearched) {
            throw new NotFoundRequest(bookNameToSearch, 'not find the book');
         }

         return res.status(200).json(bookSearched.dataValues);
      } catch (error) {
         if ('status' in error) {
            res.status(error.status).send(error);
         } else {
            console.log(error);
            res.status(500).send('Internal Server Error');
         }
      }
   }
}

export default BookRoutes;
