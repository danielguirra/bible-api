import VerseModel from '../../schemas/verse.js';

class VerseService {
   async getOneVerseBasedInChapertNumberBookNameVerseNumber({
      chapterNumber,
      bookName,
      verseNumber,
   }) {
      const finder = await VerseModel.findOne({
         where: {
            chapterNumber,
            bookName,
            verseNumber,
         },
         logging: false,
      });

      if (finder) {
         return {
            bookName,
            chapterNumber,
            verseNumber,
            data: finder.dataValues.content,
         };
      }

      return false;
   }
}

export default VerseService;
