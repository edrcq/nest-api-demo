import { IsNotEmpty, Length, MinLength, MaxLength, IsEmail } from 'class-validator'

export class CreateTodolistDto {
    
    @IsNotEmpty({
        message: 'Nom ne doit pas etre vide'
    })
    @MinLength(1, { 
        message: 'Nom trop petit'
    })
    @MaxLength(100, {
        message: 'Nom est trop grand'
    })
    name: string
}
