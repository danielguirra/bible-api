import { Model, INTEGER, STRING, TEXT, INET } from 'sequelize';
import Database from '../config.js';

class Verse {
   id;
   content;
   bookId;
   bookName;
   chapterNumber;
   nextVerseId;
   previusVerseId;
   verseNumber;
   /**
    *
    * @param {Verse} verse
    */
   constructor(verse) {
      Object.assign(this, verse);
   }
}

/**
 * @extends Model<Verse>
 */
class VerseModel extends Model {}

VerseModel.init(
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
      content: {
         type: STRING(560),
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
      nextVerseId: {
         type: INTEGER,
         allowNull: true,
      },
      previusVerseId: {
         type: INTEGER,
         allowNull: true,
      },
      verseNumber: {
         type: INTEGER,
         allowNull: false,
      },
   },
   {
      sequelize: Database.getConnection(),
      tableName: 'verses',
   }
);

export default VerseModel;
