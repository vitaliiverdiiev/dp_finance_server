import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAll(@Query() query: string) {
    console.log({ query });
    return [{ name: 'Rony' }];
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    console.log(id);
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    console.log({ body });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    console.log({ id, body });
  }
}
