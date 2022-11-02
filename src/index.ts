import { NestFactory } from '@nestjs/core'
import { ExpressAdapter } from '@nestjs/platform-express'
import express from 'express'


export const helloPubSub = (event: any, context: any) => {
    const message = event.data || null

    const server = express()

    class AppModule {}

    console.log(message)

    const createNestServer = async (expressInstance) => {
        const app = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance))
        return app.init()
    }

    createNestServer(server)
    .then((v) => {
        console.log(message)
        console.log('running....')
    })
}