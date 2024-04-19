import BadRequest from '../errs/BadRequest.js';
import NotFoundRequest from '../errs/NotFound.js';
import VerseService from '../service/verse.service.js';
import BaseRoute from './base.route.js';

class VerseRoutes extends BaseRoute {
   constructor() {
      super('verse');
      this.setRoutes('/', this.getVerseByChapterNumberBookNameVerseNumber);
   }

   typeCheck(chapterNumber, bookName, verseNumber) {
      if (
         !this.isNumber(chapterNumber) ||
         !this.isNumber(verseNumber) ||
         !this.isString(bookName)
      ) {
         throw new BadRequest(
            {
               chapterNumber,
               bookName,
               verseNumber,
            },
            'verify your query params'
         );
      }
   }
   async getVerseByChapterNumberBookNameVerseNumber(req, res) {
      try {
         const { chapterNumber, bookName, verseNumber } = req.query;

         chapterNumber = parseInt(chapterNumber);
         verseNumber = parseInt(verseNumber);
         this.typeCheck(chapterNumber, bookName, verseNumber);

         const verseService = new VerseService();

         const result =
            await verseService.getOneVerseBasedInChapertNumberBookNameVerseNumber(
               { chapterNumber, bookName, verseNumber }
            );

         if (!result) {
            throw new NotFoundRequest(
               {
                  chapterNumber,
                  bookName,
                  verseNumber,
               },
               'Not find one verse based in query params'
            );
         }

         return res.status(200).json(result);
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

export default VerseRoutes;
