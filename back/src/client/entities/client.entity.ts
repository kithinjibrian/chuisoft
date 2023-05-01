import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    desc: string;

    @Column()
    service: string;

    @Column()
    budget: string;

    @CreateDateColumn()
    createdAt : String
}
