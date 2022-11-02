"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const helloWorld = (event, context) => {
    const message = event.data
        ? event.data : 'Hello, World';
    console.log(message);
    console.log('...running');
};
exports.helloWorld = helloWorld;
//# sourceMappingURL=index.js.map