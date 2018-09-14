"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var apiRoutes_1 = require("../../common/apiRoutes");
var registerRoute_1 = require("./registerRoute");
// tslint:disable-next-line:no-var-requires
var os = require('electron-shutdown-command');
var AppController = /** @class */ (function () {
    function AppController() {
    }
    AppController.prototype.start = function (helper) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('AppController.start');
                registerRoute_1.registerRoute(helper.moduleApiRouter, apiRoutes_1.routes.getServerInfo, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        console.log('AppController.getServerInfo');
                        result = {
                            ip: '',
                            cpu: '',
                            memory: ''
                        };
                        res.send(result);
                        return [2 /*return*/];
                    });
                }); });
                registerRoute_1.registerRoute(helper.moduleApiRouter, apiRoutes_1.routes.exitApplication, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('AppController.exitApplication');
                        res.sendStatus(201);
                        helper.backendService.exit();
                        return [2 /*return*/];
                    });
                }); });
                registerRoute_1.registerRoute(helper.moduleApiRouter, apiRoutes_1.routes.restartApplication, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('AppController.restartApplication');
                        res.sendStatus(201);
                        helper.backendService.restart();
                        return [2 /*return*/];
                    });
                }); });
                registerRoute_1.registerRoute(helper.moduleApiRouter, apiRoutes_1.routes.shutdownSystem, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('AppController.shutdownSystem');
                        res.sendStatus(201);
                        os.shutdown({ quitapp: true });
                        return [2 /*return*/];
                    });
                }); });
                registerRoute_1.registerRoute(helper.moduleApiRouter, apiRoutes_1.routes.restartSystem, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('AppController.restartSystem');
                        res.sendStatus(201);
                        os.restart({ quitapp: true });
                        return [2 /*return*/];
                    });
                }); });
                registerRoute_1.registerRoute(helper.moduleApiRouter, apiRoutes_1.routes.resetApplication, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('AppController.resetApplication');
                        res.sendStatus(201);
                        helper.backendService.reset();
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    return AppController;
}());
exports.AppController = AppController;
//# sourceMappingURL=AppController.js.map