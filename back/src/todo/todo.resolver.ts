import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateToDoInput } from './models/create-todo-input';
import { ToDo } from './models/todo.model';
import { UpdateToDoInput } from './models/update-todo-input';
import { TodoService } from './todo.service';

@Resolver((of) => ToDo)
export class ToDoResolver {
  constructor(private todoService: TodoService) {}

  @Query((returns) => [ToDo], { nullable: 'items' })
  getAll() {
    return this.todoService.getAll();
  }

  @Mutation((returns) => Boolean)
  create(
    @Args('createToDoInput', { type: () => CreateToDoInput })
    createToDoInput: CreateToDoInput,
  ) {
    return this.todoService.create(createToDoInput);
  }

  @Query((returns) => ToDo, { nullable: true })
  get(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.get(id);
  }

  @Mutation((returns) => Boolean)
  update(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateToDoInput', { type: () => UpdateToDoInput })
    updateToDoInput: UpdateToDoInput,
  ) {
    return this.todoService.update(id, updateToDoInput);
  }

  @Mutation((returns) => Boolean)
  delete(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.delete(id);
  }
}
