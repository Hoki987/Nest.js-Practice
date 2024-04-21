import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ example: "example@mail.ru", description: "Адрес почты"})
    readonly email: string;
    @ApiProperty({ example: "111", description: "Пароль" })
    readonly password: string;
}