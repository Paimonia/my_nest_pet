import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/users.entity'; 

@Entity({ name: 'posts' })
export class UserPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 600 })
  title: string;

  @Column({ type: 'varchar'})
  content: string;

  @ManyToOne(() => User, user => user.posts)
  @JoinColumn({ name: 'userId' })
  user: User;
}