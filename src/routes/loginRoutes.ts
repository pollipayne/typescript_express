import express, { Router, Response, Request, NextFunction } from 'express';

interface requestBody extends Request {
  body: { [key: string]: string | undefined }
};


const router = Router();

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403);
    res.send("You must be logged in. ")
  }
}

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

  if (email && password && email === "noodles@noodle.com" && password === 'password') {
    req.session = { loggedIn: true }
    res.redirect('/');
  } else {
    res.send("Invalid email or password.")
  }

});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <div>Your are logged in </div>
      <a href="/logout"> Logout </a>
    </div>
    `);

  } else {
    res.send(`
    <div>
      <div>Your are not logged in </div>
      <a href="/login"> Login </a>
    </div>
    `);

  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');


});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route mr. logged in user. ")
})


export { router };