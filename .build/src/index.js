"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const core_1 = require("@nestjs/core");
const helloWorld = (event, context) => {
    const createNestServer = async () => {
        const app = await core_1.NestFactory.create({});
        return app.init();
    };
    console.log('running....');
};
exports.helloWorld = helloWorld;
//# sourceMappingURL=index.js.map