import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send("must login");
}

const router = Router();

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
        <div>
            <h1>already loggedin</h1>
            <a href="/logout">logout</logout>
        </div>
    `);
  } else {
    res.send(`
    <div>
            <h1>not loggedin</h1>
            <a href="/login">login</logout>
        </div>
    `);
  }
});

router.get("/login", (req: Request, res: Response) => {
  res.send(
    `
      <form method="POST">
        <div>
            <label>Email</label>
            <input name="email"/>
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password"/>
        </div>
        <button>Submit</button>
      </form>
      `
  );
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password) {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("must send email and password");
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("this is protected");
});

export { router };
