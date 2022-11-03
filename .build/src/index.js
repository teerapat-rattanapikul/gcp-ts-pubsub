var nestt = require('@nestjs/core');

exports.helloWorld = (event, context) => {
  const message = event.data || null

  const createNestServer = async () => {
    const moduless = class BatchModule {}
    const app = await nestt.NestFactory.create(moduless)
    return app.init()
  }

  createNestServer()
  .then((v) => {
    console.log(message)
    console.log('running....')
  })
};

//# sourceMappingURL=index.js.map