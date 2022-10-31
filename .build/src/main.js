"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloPubSub = void 0;
const helloPubSub = (event, context) => {
    const message = event.data
        ? event.data : 'Hello, World';
    console.log(message);
    console.log('...running');
};
exports.helloPubSub = helloPubSub;
//# sourceMappingURL=main.js.map