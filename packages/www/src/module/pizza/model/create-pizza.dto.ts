import {ObjectType, Field, Int} from "@nestjs/graphql";

@ObjectType()
export class PizzaType {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  price: number;

  @Field()
  annotation: string | null;

  @Field()
  description: string | null;

  @Field(() => [Int])
  ingredientsId: number[];
}
