import { NestFactory } from '@nestjs/core'

export const helloWorld = (event: any, context: any) => {

  const createNestServer = async () => {
    const moduless = class BatchModule {}
    const app = await NestFactory.create(moduless)
    return app.init()
  }
  
  console.log('running....')
};
