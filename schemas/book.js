import { Model, INTEGER, STRING } from 'sequelize';
import Database from '../config.js';
/**
 * @property {number} id
 * @property {string} name
 * @property {number} chapters
 * @property {string} version
 */
class Book {
   id;
   name;
   chapters;
   version;
   nextBook;
   previusBook;
   /**
    * @param {Book} book
    */
   constructor(book) {
      Object.assign(this, book);
   }
}

/**
 * @extends Model<Book>
 */
class BookModel extends Model {}

BookModel.init(
   {
      id: {
         autoIncrement: true,
         primaryKey: true,
         type: INTEGER,
      },
      name: {
         type: STRING(30),
         allowNull: false,
         unique: true,
      },
      chapters: {
         type: INTEGER,
         allowNull: false,
      },
      version: {
         type: STRING(30),
         allowNull: false,
      },
   },
   {
      sequelize: Database.getConnection(),
      tableName: 'books',
   }
);

export default BookModel;
