import { Controller, Get, Post, Body, Patch, Param, Delete,
  BadGatewayException, ParseIntPipe, HttpStatus,
} from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { SkipThrottle, Throttle } from '@nestjs/throttler';
import { TodosService } from './todos.service';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todolist } from './entities';

@Controller('todos')
export class TodosController {
  constructor(
    private readonly todosService: TodosService,
    private eventEmitter: EventEmitter2,
  ) {}

  @Throttle(5, 60)
  @Post()
  async create(@Body() createTodoDto: CreateTodolistDto): Promise<Todolist> {
    const todolist = await this.todosService.create(createTodoDto);
    this.eventEmitter.emit('todos.created', todolist)
    return todolist
  }

  @Get('/test')
  getTest() {
    // grosse logique
    // erreur
    throw new BadGatewayException();
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  @SkipThrottle()
  findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return this.todosService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
  }

  @OnEvent('todos.created')
  listenTodosCreated(todolist: Todolist) {
    console.log(`New todolist created: ${todolist.id}`)
  }
}
