import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';

@Controller('user')
export class UserController {
  @Post()
  //função aync diz que enquanto não tiver tudo feito ela não vai terminar
  async createUser(@Body() createUser: CreateUserDto) {
    return {
      ...createUser,
      password: undefined,
    };
  }
}
