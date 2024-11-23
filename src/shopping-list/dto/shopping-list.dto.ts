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
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class CreateShoppingListInput {
  @Field()
  name: string;

  @Field(() => Int)
  amount: number;
}

@InputType()
export class UpdateShoppingListInput {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  amount?: number;
}
