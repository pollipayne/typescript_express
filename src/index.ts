import express, { Response, Request } from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';


const app = express();




app.listen(3000, () => {
  console.log("Listening on port 3000")
})


// /// A TS Style class implementation of this idea 
// class Server { 
//   app: express.Express = express();

//   constructor() {
//   this.app.use(express.urlencoded({ extended: true }))
//   this.app.use(express.json());
//   this.app.use(cookieSession({ keys: ['a;slkdfja;s'] }));
//   this.app.use(router);

//   }

//   start(): void { 
//     this.app.listen(3000, () => {
//       console.log('listening on port 3000')
//     });
//   }
// }


// new Server().start();