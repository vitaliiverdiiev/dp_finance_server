import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShoppingList } from './shopping-list.schema';
import {
  CreateShoppingListInput,
  UpdateShoppingListInput,
} from './dto/shopping-list.dto';

@Injectable()
export class ShoppingListService {
  constructor(
    @InjectModel(ShoppingList.name)
    private shoppingListModel: Model<ShoppingList>,
  ) {}

  async create(input: CreateShoppingListInput): Promise<ShoppingList> {
    const shoppingList = new this.shoppingListModel(input);
    return shoppingList.save();
  }

  async findAll(): Promise<ShoppingList[]> {
    return this.shoppingListModel.find().exec();
  }

  async findOne(id: string): Promise<ShoppingList> {
    return this.shoppingListModel.findById(id).exec();
  }

  async update(
    id: string,
    input: UpdateShoppingListInput,
  ): Promise<ShoppingList> {
    return this.shoppingListModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
  }

  async delete(id: string): Promise<ShoppingList> {
    return this.shoppingListModel.findByIdAndDelete(id).exec();
  }
}
