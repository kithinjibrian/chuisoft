import { Controller, Get, Logger, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller("/")
export class AppController {
  constructor(
    private readonly logger: Logger,
    private readonly appService: AppService
    ) {}

  @Get()
  home(@Res() res: Response,@Req() req: Request) {
    this.logger.log({
      message:"server.endpoint.home.get.homepage",
      clientIP:req.headers['x-forwarded-for'] || req.ip,
      host:req.headers.host
    },AppController.name)
    res.sendFile("index.html",{
      root:"./client"
    })
  }
}
