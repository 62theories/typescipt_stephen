"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
function logger(req, res, next) {
    console.log("test");
    next();
}
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send("must login");
}
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (req, res) {
        res.send("\n            <form method=\"POST\">\n              <div>\n                  <label>Email</label>\n                  <input name=\"email\"/>\n              </div>\n              <div>\n                  <label>Password</label>\n                  <input name=\"password\" type=\"password\"/>\n              </div>\n              <button>Submit</button>\n            </form>\n            ");
    };
    LoginController.prototype.postLogin = function (req, res) {
        req.session = { loggedIn: true };
        res.redirect("/");
    };
    LoginController.prototype.getLogout = function (req, res) {
        req.session = undefined;
        res.redirect("/");
    };
    LoginController.prototype.getHome = function (req, res) {
        if (req.session && req.session.loggedIn) {
            res.send("\n          <div>\n              <h1>already loggedin</h1>\n              <a href=\"/logout\">logout</logout>\n          </div>\n      ");
        }
        else {
            res.send("\n      <div>\n              <h1>not loggedin</h1>\n              <a href=\"/login\">login</logout>\n          </div>\n      ");
        }
    };
    LoginController.prototype.getProtected = function (req, res) {
        res.send("this is protected");
    };
    __decorate([
        decorators_1.get("login"),
        decorators_1.use(logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        decorators_1.post("login"),
        decorators_1.bodyValidator("email", "password"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postLogin", null);
    __decorate([
        decorators_1.get("logout"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogout", null);
    __decorate([
        decorators_1.get(""),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getHome", null);
    __decorate([
        decorators_1.get("protected"),
        decorators_1.use(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getProtected", null);
    LoginController = __decorate([
        decorators_1.controller("/")
    ], LoginController);
    return LoginController;
}());
