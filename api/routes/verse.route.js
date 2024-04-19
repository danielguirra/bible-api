import BadRequest from '../errs/BadRequest.js';
import NotFoundRequest from '../errs/NotFound.js';
import VerseService from '../service/verse.service.js';
import BaseRoute from './base.route.js';

class VerseRoutes extends BaseRoute {
   constructor() {
      super('verse');
      this.setRoutes('/', this.getVerseByChapterNumberBookNameVerseNumber);
   }

   async getVerseByChapterNumberBookNameVerseNumber(req, res) {
      function typeCheck(
         chapterNumber = null,
         bookName = null,
         verseNumber = null
      ) {
         if (!chapterNumber || !bookName || !verseNumber) {
            throw new BadRequest(
               {
                  chapterNumber,
                  bookName,
                  verseNumber,
               },
               'Invalid Query Params'
            );
         }
      }
      try {
         const verseNumber = parseInt(req.query.verseNumber);
         const chapterNumber = parseInt(req.query.chapterNumber);
         const bookName = req.query.bookName;

         typeCheck(chapterNumber, bookName, verseNumber);

         const verseService = new VerseService();
         const result =
            await verseService.getOneVerseBasedInChapertNumberBookNameVerseNumber(
               {
                  chapterNumber,
                  bookName,
                  verseNumber,
               }
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
