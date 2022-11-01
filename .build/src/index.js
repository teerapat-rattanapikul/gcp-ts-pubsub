"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QCHistory = void 0;
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = __importDefault(require("express"));
const initialApp = async (expressInstance) => {
    const app = await core_1.NestFactory.create({}, new platform_express_1.ExpressAdapter(expressInstance));
    return app;
};
const QCHistory = async (event) => {
    const server = (0, express_1.default)();
    console.log(`#main delete qc history start`);
    const app = await initialApp(server);
    const changeDate = new Date().setDate(new Date().getDate() - 7);
    const limitDate = new Date(changeDate);
    console.log(`limit date ${limitDate}`);
    console.log('#main delete qc history end');
    await app.close();
    return true;
};
exports.QCHistory = QCHistory;
//# sourceMappingURL=index.js.map