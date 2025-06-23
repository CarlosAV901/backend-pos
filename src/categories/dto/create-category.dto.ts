import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty({
        message: 'El nombre de la categoría no puede ir vació'
    })
    name: string
}
