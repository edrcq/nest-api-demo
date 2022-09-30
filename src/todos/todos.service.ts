import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { Todo, Todolist } from './entities';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todolist)
    private todolistRepository: Repository<Todolist>,
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  create(createTodolistDto: CreateTodolistDto): Promise<Todolist> {
    // createConne
    return this.todolistRepository.save(
      this.todolistRepository.create(createTodolistDto)
    )
  }

  findAll(): Promise<Todolist[]> {
    return this.todolistRepository.find({ relations: {
      todos: true
    }});
  }

  async findOne(id: number) {
    const todolist = await this.todolistRepository.findOne({ where: { id }})
    if (!todolist) {
      throw new NotFoundException();
    }
    return todolist;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
