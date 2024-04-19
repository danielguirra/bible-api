import { Model, INTEGER, STRING } from 'sequelize';
import Database from '../config.js';
import BookModel from './book.js';

class Chapter {
   id;
   chapterNumber;
   verses;
   bookId;
   bookName;
   /**
    *
    * @param {Chapter} chapter
    */
   constructor(chapter) {
      Object.assign(this, chapter);
   }
}
/**
 * @extends Model<Chapter>
 */
class ChapertModel extends Model {
   id;
   chapterNumber;
   verses;
   bookId;
   bookName;
}

ChapertModel.init(
   {
      id: {
         autoIncrement: true,
         primaryKey: true,
         type: INTEGER,
      },
      chapterNumber: {
         type: INTEGER,
         allowNull: false,
      },
      verses: {
         type: INTEGER,
         allowNull: false,
      },
      bookId: {
         type: INTEGER,
         allowNull: false,
      },
      bookName: {
         type: STRING(30),
         allowNull: false,
      },
   },
   {
      sequelize: Database.getConnection(),
      tableName: 'chapters',
   }
);
ChapertModel.belongsTo(BookModel, { foreignKey: 'bookId', targetKey: 'id' });

export default ChapertModel;
