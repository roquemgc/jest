import { createServer, Server } from "restify";
import { Controller } from "./controller";

export class Application {
    server: Server;

    constructor() {
        this.server = createServer();
    }

    async bootstrap(controller: Controller[]) {
        this.server.listen(process.env.PORT);
        controller.forEach(c => c.applyRoutes(this.server));
    }

    async shutdown() {
        this.server.close();
    }
}