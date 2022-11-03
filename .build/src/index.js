"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const core_1 = require("@nestjs/core");
const helloWorld = (event, context) => {
    const createNestServer = async () => {
        const moduless = class BatchModule {
        };
        const app = await core_1.NestFactory.create(moduless);
        return app.init();
    };
    console.log('running....');
};
exports.helloWorld = helloWorld;
//# sourceMappingURL=index.js.map