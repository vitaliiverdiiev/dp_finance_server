import { IsEmail, IsStrongPassword } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

class UserDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}

export class CreateUserDto extends UserDto {}

export class UpdateUserDto extends PartialType(UserDto) {}
