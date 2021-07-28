import { Router, Request, Response, NextFunction } from "express";
import { get, controller, use, bodyValidator, post } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log("test");
  next();
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send("must login");
}

@controller("/")
class LoginController {
  @get("login")
  @use(logger)
  getLogin(req: Request, res: Response): void {
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
  }

  @post("login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    req.session = { loggedIn: true };
    res.redirect("/");
  }

  @get("logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }

  @get("")
  getHome(req: Request, res: Response) {
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
  }

  @get("protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send("this is protected");
  }
}
