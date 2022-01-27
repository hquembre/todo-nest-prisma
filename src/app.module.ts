import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
