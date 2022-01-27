import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateToDoInput {
  @Field()
  todo: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  done: boolean;
}
