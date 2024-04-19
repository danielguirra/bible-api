import VerseModel from '../../schemas/verse.js';

class ChapertService {
   async getVerbesByChapertAndBook({ chapterNumber, bookName }) {
      const finder = await VerseModel.findAll({
         where: {
            bookName: bookName,
            chapterNumber: chapterNumber,
         },
         logging: false,
         attributes: ['content'],
      });

      if (finder.length > 0) {
         return {
            book: bookName.toUpperCase(),
            chapterNumber,
            totalOfVerses: finder.length,
            verses: finder,
         };
      }

      return false;
   }
}

export default ChapertService;
