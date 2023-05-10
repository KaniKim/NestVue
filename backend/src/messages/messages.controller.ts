import { Controller, Get, Param, Body, Post } from "@nestjs/common";
import { CreateMessageDto } from "./DTOs/create-message.dto";

@Controller("/messages")
export class MessagesController {

  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get("/:id")
  getMessage(@Param("id") id: string) {
    console.log(id);
  }
}
