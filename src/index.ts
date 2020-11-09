import { indexes } from "./controllers/index.controller";
import { Application } from "./server/application";

const app = new Application();

app.bootstrap([indexes]).then(() => console.log(`server is running`)).catch(error => console.log(`server failed to start ${error.message}`))