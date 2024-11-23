import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListResolver } from './shopping-list.resolver';
import { ShoppingList, ShoppingListSchema } from './shopping-list.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ShoppingList.name, schema: ShoppingListSchema },
    ]),
  ],
  providers: [ShoppingListService, ShoppingListResolver],
})
export class ShoppingListModule {}
