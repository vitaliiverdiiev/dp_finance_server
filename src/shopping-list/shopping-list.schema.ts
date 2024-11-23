import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ShoppingList extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
}

export const ShoppingListSchema = SchemaFactory.createForClass(ShoppingList);
