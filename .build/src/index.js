"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const express_1 = __importDefault(require("express"));
const helloWorld = (event, context) => {
    const server = (0, express_1.default)();
    const message = event.data
        ? event.data : 'Hello, World';
    console.log(message);
    console.log('...running');
};
exports.helloWorld = helloWorld;
//# sourceMappingURL=index.js.map