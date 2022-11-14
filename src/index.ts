import {  NestFactory } from '@nestjs/core'

export async function helloWorld (event: any, context: any):Promise<any> {

    const createNestServer = async () => {
      const moduless = class BatchModule {}
      const app = await NestFactory.create(moduless)
      return app.init()
    }

    await createNestServer()
    console.log('running....')
  };