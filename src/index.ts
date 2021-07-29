import express, { Response, Request } from 'express';
import { router } from './routes/loginRoutes';


const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(router);


app.listen(3000, () => {
  console.log("Listening on port 3000")
})