import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListType } from './dto/shopping-list.dto';
import {
  CreateShoppingListInput,
  UpdateShoppingListInput,
} from './dto/shopping-list.dto';

@Resolver(() => ShoppingListType)
export class ShoppingListResolver {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Query(() => [ShoppingListType], { name: 'shoppingLists' })
  findAll() {
    return this.shoppingListService.findAll();
  }

  @Query(() => ShoppingListType, { name: 'shoppingList' })
  findOne(@Args('id') id: string) {
    return this.shoppingListService.findOne(id);
  }

  @Mutation(() => ShoppingListType)
  createShoppingList(@Args('input') input: CreateShoppingListInput) {
    return this.shoppingListService.create(input);
  }

  @Mutation(() => ShoppingListType)
  updateShoppingList(
    @Args('id') id: string,
    @Args('input') input: UpdateShoppingListInput,
  ) {
    return this.shoppingListService.update(id, input);
  }

  @Mutation(() => ShoppingListType)
  deleteShoppingList(@Args('id') id: string) {
    return this.shoppingListService.delete(id);
  }
}
