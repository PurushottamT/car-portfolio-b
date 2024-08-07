import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role, Users } from '../interface/users';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string;

  @Column({ type: 'varchar', length: 256 })
  email: string;

  @Column({ type: 'varchar', length: 256 })
  password: string;

  @Column({ type: 'varchar', length: 256 })
  confirm_password: string;

  @Column({ type: 'varchar', length: 256 })
  name: string;

  @Column({ type: 'boolean', default: false })
  email_verified: boolean;

  @Column({ type: 'enum', enum: Role, default: Role.customer })
  role: Role.customer;

  @Column({ type: 'enum', enum: Users, default: Users.InActive })
  status: Users.InActive;

  @CreateDateColumn({ type: 'datetime', precision: 6 })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', precision: 6 })
  updatedAt: Date;
}
