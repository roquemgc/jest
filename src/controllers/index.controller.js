"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexes = void 0;
const tslib_1 = require("tslib");
class IndexController {
    constructor() {
        this.get = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                res.json([]);
                next();
            }
            catch (e) {
                next(e);
            }
        });
    }
    applyRoutes(server) {
        server.get('/', this.get);
    }
}
exports.indexes = new IndexController();
