"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("jest");
const request = require("supertest");
const index_controller_1 = require("../../src/controllers/index.controller");
const application_1 = require("../../src/server/application");
const app = new application_1.Application();
beforeAll((done) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield app.bootstrap([index_controller_1.indexes]);
    done();
}));
afterAll((done) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield app.shutdown();
    done();
}));
describe('/controllers/index.controller', () => {
    it('should be able to return an empty array', (done) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app.server).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBe(0);
        done();
    }));
});
