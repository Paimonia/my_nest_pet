import { Module, Post } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/users.entity';
import { PostsModule } from './posts/posts.module';
import { UserPost } from './posts/entities/posts.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'nyan',
      username: 'postgres',
      entities: [User, UserPost],
      database: 'my_nest_pet',
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    PostsModule,
  ],
})
export class AppModule {}