import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ShoppingListService } from './shopping-list.service';
import {
  AddShoppingListItemInput,
  UpdateShoppingListItemInput,
  ShoppingListType,
} from './dto/shopping-list.dto';

@Resolver(() => ShoppingListType)
export class ShoppingListResolver {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Query(() => [ShoppingListType], { name: 'shoppingList' })
  findAll() {
    return this.shoppingListService.findAll();
  }

  @Query(() => ShoppingListType, { name: 'shoppingListItem' })
  findOne(@Args('id') id: string) {
    return this.shoppingListService.findOne(id);
  }

  @Mutation(() => ShoppingListType)
  addShoppingListItem(@Args('input') input: AddShoppingListItemInput) {
    return this.shoppingListService.create(input);
  }

  @Mutation(() => ShoppingListType)
  updateShoppingListItem(
    @Args('id') id: string,
    @Args('input') input: UpdateShoppingListItemInput,
  ) {
    return this.shoppingListService.update(id, input);
  }

  @Mutation(() => ShoppingListType)
  deleteShoppingListItem(@Args('id') id: string) {
    return this.shoppingListService.delete(id);
  }
}
