import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, Req } from '@nestjs/common';
import { Request } from 'express';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(
    private readonly logger: Logger,
    private readonly clientService: ClientService
    ) {}

  @Post("post")
  create(@Body() createClientDto: CreateClientDto, @Req() req: Request) {
    this.logger.log({
      message:"server.endpoint.client.post.insert.job",
      clientIP:req.headers['x-forwarded-for'] || req.ip,
      host:req.headers.host
    },ClientController.name)
    return this.clientService.create(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}
