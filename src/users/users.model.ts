import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRole } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: "1", description:"Уникальный"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: "example@mail.ru", description: "Адрес почты" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: "111", description: "Пароль" })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: "true", description: "Забанен или нет" })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: "Пакостил", description: "Причина бана" })
    @Column({ type: DataType.BOOLEAN, allowNull: true })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRole)
    roles: Role[];
}