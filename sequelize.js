import Database from './config.js';
import BookModel from './schemas/book.js';
import ChapertModel from './schemas/chapter.js';
import VerseModel from './schemas/verse.js';

const sequelize = Database.getConnection();

sequelize.sync(async () => {
   await BookModel.sync();
   await ChapertModel.sync();
   await VerseModel.sync();
});

export default sequelize;
