"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const tslib_1 = require("tslib");
const restify_1 = require("restify");
class Application {
    constructor() {
        this.server = restify_1.createServer();
    }
    bootstrap(controller) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.server.listen(process.env.PORT);
            controller.forEach(c => c.applyRoutes(this.server));
        });
    }
    shutdown() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.server.close();
        });
    }
}
exports.Application = Application;
