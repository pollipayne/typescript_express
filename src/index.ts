import express, { Response, Request } from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';


const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieSession({ keys: ['a;slkdfja;s'] }));
app.use(router);


app.listen(3000, () => {
  console.log("Listening on port 3000")
})