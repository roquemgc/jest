import { Server } from "restify";
import { Controller } from "../server/controller";

class IndexController  implements Controller {
    get = async (req,res,next) => {
        try {
            res.json([]);
            next();
        } catch(e) {
            next(e);
        }
    };

    applyRoutes(server: Server):void {
        server.get('/', this.get);
    }
}

export const indexes = new IndexController();