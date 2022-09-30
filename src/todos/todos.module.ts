import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Todo, Todolist } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todolist, Todo]),
  ],
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
