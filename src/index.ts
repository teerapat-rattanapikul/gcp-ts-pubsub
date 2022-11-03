import { NestFactory } from '@nestjs/core'

const createNestServer = async () => {
  const moduless = class BatchModule {}
  const app = await NestFactory.create(moduless)
  return app.init()
}

export const helloWorld = async (event: any, context: any) => {

  await createNestServer()
  
  const message = event.data
    ? event.data : 'Hello, World';
  console.log(message);
  console.log('...running')
};
