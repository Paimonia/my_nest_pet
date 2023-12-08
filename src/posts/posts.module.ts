import { Module } from '@nestjs/common';
import { PostService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPost } from './entities/posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPost])],
  controllers: [PostsController],
  providers: [PostService],
})
export class PostsModule {}