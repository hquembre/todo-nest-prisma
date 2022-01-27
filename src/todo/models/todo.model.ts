import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ToDo {
  @Field((type) => Int)
  id: number;

  @Field()
  todo: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  done: boolean;
}
