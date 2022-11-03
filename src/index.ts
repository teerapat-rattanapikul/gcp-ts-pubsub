import { NestFactory } from '@nestjs/core'

export const helloWorld = (event: any, context: any) => {

  const createNestServer = async () => {
    const app = await NestFactory.create({})
    return app.init()
  }
  
  console.log('running....')
};
