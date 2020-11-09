import "jest";
import * as request from 'supertest';
import { indexes } from "../../src/controllers/index.controller";
import { Application } from '../../src/server/application';

const app = new Application();

beforeAll(async (done) => {
    await app.bootstrap([indexes]);
    done();
});

afterAll(async (done) => {
    await app.shutdown();
    done();
});

describe('/controllers/index.controller', () => {
    it('should be able to return an empty array', async (done) => {
        const response = await request(app.server).get('/');

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBe(0);
        done();
    })
})