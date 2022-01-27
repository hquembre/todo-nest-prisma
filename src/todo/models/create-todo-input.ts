import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateToDoInput {
  @Field()
  todo: string;

  @Field({ nullable: true })
  description: string;
}
