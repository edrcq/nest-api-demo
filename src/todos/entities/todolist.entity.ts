import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Todo } from './todo.entity'

@Entity()
export class Todolist {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        default: false
    })
    archived: boolean

    @OneToMany(() => Todo, (todo) => todo.todolist, {
        onDelete: "CASCADE",
        cascade: ['remove', 'insert', 'update'],
        eager: true
    })
    todos: Todo[]
}
