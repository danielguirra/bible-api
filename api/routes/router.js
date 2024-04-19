import express from 'express';
import BookRoutes from './book.route.js';
import ChapertRoutes from './chapter.route.js';
import VerseRoutes from './verse.route.js';

class Router {
   constructor(port) {
      this.port = port;
   }

   app = express();

   routes = {
      bible: new BookRoutes().router,
      chapter: new ChapertRoutes().router,
      verse: new VerseRoutes().router,
   };

   port;

   start() {
      this.setupRoutes();

      this.app.listen(this.port, () => {
         console.log(`O servidor está rodando na porta ${this.port}`);
      });
   }

   setupRoutes() {
      this.app.use('/bible', this.routes.bible);
      this.app.use('/chapter', this.routes.chapter);
      this.app.use('/verse', this.routes.verse);
   }
}

new Router(process.env.PORT || 3000).start();
