import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Todolist } from './todolist.entity'
import { TodoState } from '../interfaces/todostate.interface'

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @Column({
        default: TodoState.TODO
    })
    state: TodoState

    @ManyToOne(() => Todolist, (todolist) => todolist.todos)
    todolist: Todolist
}
