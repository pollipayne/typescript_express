import express, { Router, Response, Request } from 'express';

interface requestBody extends Request {
  body: { [key: string]: string | undefined }
};


const router = Router();


router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
    <div> 
      <label>Email</label>
      <input name="email" />
    </div>
    <div>
      <label> Password </label>
      <input name="password" type="password" />
    </div>
    <button> Submit </button>
  </form>

  `);

});

router.post('/login', (req: requestBody, res: Response) => {
  const { email, password } = req.body;
  if (email) {
    res.send(email + password);
  } else {
    res.send("You must provide an email")
  }

});




export { router };