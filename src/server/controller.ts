import { Server } from "restify";

export interface Controller {
    applyRoutes(server: Server): void;
}