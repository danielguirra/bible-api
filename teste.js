import VerseModel from './schemas/verse.js';

VerseModel.findAll({
   where: {
      bookName: 'salmos',
      chapterNumber: 23,
   },
   attributes: ['content'],
}).then((verses) => {
   for (const verse of verses) {
      console.log(verse.dataValues.content);
   }
});
