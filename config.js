import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
class Database {
   static connection;
   constructor() {}

   static getConnection() {
      if (!Database.connection) {
         if (process.env.CODESPACES) {
            Database.connection = new Sequelize({
               dialect: 'sqlite',
               storage: './dtab.sqlite',
            });
         } else {
            const requiredEnvVars = [
               'DB_NAME',
               'DB_USERNAME',
               'DB_PASSWORD',
               'DB_HOST',
               'DB_DIALECT',
            ];
            const missingEnvVars = requiredEnvVars.filter(
               (envVar) => !process.env[envVar]
            );
            if (missingEnvVars.length > 0) {
               throw new Error(
                  `As seguintes variáveis de ambiente estão faltando: ${missingEnvVars.join(
                     ', '
                  )}`
               );
            }

            const validDialects = ['mysql', 'postgres', 'sqlite'];

            const dialect = process.env.DB_DIALECT;
            if (!validDialects.includes(dialect)) {
               throw new Error(
                  `Dialeto de banco de dados inválido: ${dialect}`
               );
            }
            const dbConfig = {
               database: process.env.DB_NAME,
               username: 'root',
               password: process.env.DB_PASSWORD,
               host: process.env.DB_HOST,
               dialect: dialect,
               port: 3306,
            };

            Database.connection = new Sequelize(dbConfig);
         }
      }

      return Database.connection;
   }
}

export default Database;
