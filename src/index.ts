import { NestFactory } from '@nestjs/core'
import { ExpressAdapter } from '@nestjs/platform-express'
import express from 'express'

export const helloWorld = (event: any, context: any) => {
  const message = event.data
    ? event.data : 'Hello, World';
  console.log(message);
  console.log('...running')
};


