"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.listen(3000, function () {
    console.log("Listening on port 3000");
});
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
