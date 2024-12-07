import { Field, ObjectType, InputType, Int } from '@nestjs/graphql';

@ObjectType()
export class ShoppingListType {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  amount: number;

  @Field()
  unit: 'pc' | 'kg';

  @Field()
  isCompleted: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class AddShoppingListItemInput {
  @Field()
  name: string;

  @Field(() => Int)
  amount: number;

  @Field()
  unit: 'pc' | 'kg';

  @Field()
  isCompleted: boolean;
}

@InputType()
export class UpdateShoppingListItemInput {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  amount?: number;

  @Field()
  unit?: 'pc' | 'kg';

  @Field()
  isCompleted?: boolean;
}
