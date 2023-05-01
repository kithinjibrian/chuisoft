import { IsEmail, IsMobilePhone, IsNotEmpty, IsString, IsUUID } from "class-validator";


export class CreateClientDto {
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    phone:string;
    
    @IsString()
    desc:string;

    @IsNotEmpty()
    @IsString()
    budget: string;

    @IsNotEmpty()
    @IsString()
    service: string;
}
