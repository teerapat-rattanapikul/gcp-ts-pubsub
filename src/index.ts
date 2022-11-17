import {  NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'

export async function helloWorld (event: any, context: any):Promise<any> {

    const createNestServer = async () => {
      const moduless = class BatchModule {}
      const app = await NestFactory.create<NestExpressApplication>(moduless)
      return app.init()
    }

    await createNestServer()
    console.log('running....')
  };