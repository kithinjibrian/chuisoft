import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as csurf from 'csurf';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';

async function bootstrap() {

  //log applications
  const logger = WinstonModule.createLogger({
    format:format.combine(
      format.timestamp({
        format: "MMM-DD-YYYY HH:mm:ss"
      }),
      format.prettyPrint()
    ),
    transports:[
      new transports.Console(),
      new transports.File({filename:"./logs/info.log",level:"info"}),
      new transports.File({filename:"./logs/error.log",level:"error"})
    ],
    defaultMeta:true
  });

  //bootsrap
  const app = await NestFactory.create(AppModule,{
    logger:logger
  });
  //cors
  app.enableCors({
    origin:"http://localhost:8080"
  });
  //cookies
  app.use(cookieParser());
  //express sessions
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );
  //helmet
  app.use(helmet());
  //csp
  app.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        "script-src": ["'self'","https://connect.facebook.net","https://cdn.jsdelivr.net"],
        "img-src":["'self'","https://www.facebook.com"]
      },
    })
   );
   //powered by
   app.use(helmet.hidePoweredBy());
  //csrf
  app.use(csurf({
    cookie:true
  }))
  //validation pipes
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  //start server
  await app.listen(8080);
}
bootstrap();
