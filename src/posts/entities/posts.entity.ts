import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Users } from '../../users/entities/users.entity'; 

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 600 })
  title: string;

  @Column({ type: 'varchar'})
  content: string;

  @ManyToOne(() => Users, user => user.posts)
  @JoinColumn({ name: 'userId' })
  user: Users;
}