import { Injectable } from '@nestjs/common';
import { CreateToDoInput } from './models/create-todo-input';
import { ToDo } from './models/todo.model';
import { UpdateToDoInput } from './models/update-todo-input';
import { PrismaService } from './prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(createToDoInput: CreateToDoInput): Promise<Boolean> {
    await this.prisma.toDo.create({
      data: {
        ...createToDoInput,
        done: false,
      },
    });
    return true;
  }

  async getAll(): Promise<ToDo[]> {
    return this.prisma.toDo.findMany();
  }

  async get(id: number): Promise<ToDo | null> {
    return this.prisma.toDo.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateToDoInput: UpdateToDoInput): Promise<Boolean> {
    try {
      await this.prisma.toDo.update({
        where: {
          id: id,
        },
        data: updateToDoInput,
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  async delete(id: number): Promise<Boolean> {
    try {
      await this.prisma.toDo.delete({
        where: {
          id: id,
        },
      });
      return true;
    } catch (e) {
      return false;
    }
  }
}
