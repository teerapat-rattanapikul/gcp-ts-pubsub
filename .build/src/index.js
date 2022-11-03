"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const core_1 = require("@nestjs/core");
const createNestServer = async () => {
    const moduless = class BatchModule {
    };
    const app = await core_1.NestFactory.create(moduless);
    return app.init();
};
const helloWorld = async (event, context) => {
    await createNestServer();
    const message = event.data
        ? event.data : 'Hello, World';
    console.log(message);
    console.log('...running');
};
exports.helloWorld = helloWorld;
//# sourceMappingURL=index.js.map