import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 255, nullable: false })
    fullName: string

    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10)
        }
    }//this to save my data from dictionary attack (HASH PASSWORD)
    @Column({ nullable: false })
    password: string
}