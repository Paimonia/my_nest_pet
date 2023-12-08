import { Module, Post } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserssModule } from './users/users.module';
import { Users } from './users/entities/users.entity';
import { PostsModule } from './posts/posts.module';
import { Posts } from './posts/entities/posts.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'nyan',
      username: 'postgres',
      entities: [Users, Posts],
      database: 'nest_pet',
      synchronize: true,
      logging: true,
    }),
    UserssModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}