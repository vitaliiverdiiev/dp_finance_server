import { IsEmail, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

class UserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;
}

export class CreateUserDto extends UserDto {}

export class UpdateUserDto extends PartialType(UserDto) {}
