import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ToDoResolver } from './todo.resolver';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [],
  providers: [TodoService, ToDoResolver, PrismaService],
})
export class TodoModule {}
