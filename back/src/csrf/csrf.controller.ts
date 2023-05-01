import { Controller, Get, Req } from '@nestjs/common';

@Controller('csrf')
export class CsrfController {
  @Get()
  csrf(@Req() req) {
    return {
      "XsrfToken":req.csrfToken()
    }
  }
}
