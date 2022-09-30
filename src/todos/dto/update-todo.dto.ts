import { PartialType } from '@nestjs/mapped-types';
import { CreateTodolistDto } from './create-todolist.dto';

export class UpdateTodoDto extends PartialType(CreateTodolistDto) {}
