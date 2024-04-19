import BaseRoute from './base.route.js';
import BadRequest from '../errs/BadRequest.js';
import ChapertService from '../service/chapter.service.js';
import NotFoundRequest from '../errs/NotFound.js';

class ChapertRoutes extends BaseRoute {
   constructor() {
      super('chapter');
      this.setRoutes('/verses', this.getAllVersesBasedInChapter);
   }

   async getAllVersesBasedInChapter(req, res) {
      try {
         let { bookName, chapterNumber } = req.query;

         chapterNumber = parseInt(chapterNumber);

         if (
            typeof bookName !== 'string' ||
            typeof chapterNumber !== 'number'
         ) {
            throw new BadRequest(
               { bookName, chapterNumber },
               'verify query params'
            );
         }

         const chapertService = new ChapertService();

         const findVerbesBasedInChapertAndBook =
            await chapertService.getVerbesByChapertAndBook({
               chapterNumber,
               bookName,
            });

         if (!findVerbesBasedInChapertAndBook) {
            throw new NotFoundRequest(
               { bookName, chapterNumber },
               'not find the chapter'
            );
         }

         return res.status(200).json(findVerbesBasedInChapertAndBook);
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

export default ChapertRoutes;
