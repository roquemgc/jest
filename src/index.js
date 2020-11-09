"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_controller_1 = require("./controllers/index.controller");
const application_1 = require("./server/application");
const app = new application_1.Application();
app.bootstrap([index_controller_1.indexes]).then(() => console.log(`server is running`)).catch(error => console.log(`server failed to start ${error.message}`));
