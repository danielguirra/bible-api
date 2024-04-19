import BookModel from '../../schemas/book.js';

class BookService {
   async getBookByName(bookName) {
      const finder = await BookModel.findOne({
         where: {
            name: bookName,
         },
         logging: false,
         attributes: ['name', 'version', 'chapters'],
      });

      return finder;
   }
}

export default BookService;
