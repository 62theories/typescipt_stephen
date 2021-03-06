"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send("must login");
}
var router = express_1.Router();
exports.router = router;
router.get("/", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n        <div>\n            <h1>already loggedin</h1>\n            <a href=\"/logout\">logout</logout>\n        </div>\n    ");
    }
    else {
        res.send("\n    <div>\n            <h1>not loggedin</h1>\n            <a href=\"/login\">login</logout>\n        </div>\n    ");
    }
});
router.get("/login", function (req, res) {
    res.send("\n      <form method=\"POST\">\n        <div>\n            <label>Email</label>\n            <input name=\"email\"/>\n        </div>\n        <div>\n            <label>Password</label>\n            <input name=\"password\" type=\"password\"/>\n        </div>\n        <button>Submit</button>\n      </form>\n      ");
});
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password) {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("must send email and password");
    }
});
router.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("this is protected");
});
