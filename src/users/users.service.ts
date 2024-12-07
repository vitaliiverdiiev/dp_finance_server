import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User } from './user.schema';
import { CreateUserDto } from './dto/user.dto';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(data: CreateUserDto) {
    await new this.userModel({
      ...data,
      password: await hash(data.password, 10),
    }).save();
  }

  async getUser(query: FilterQuery<User>) {
    const user = (await this.userModel.findOne(query)).toObject();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
