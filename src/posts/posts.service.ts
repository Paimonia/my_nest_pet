import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts } from './entities/posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private readonly postsRepository: Repository<Posts>,
  ) {}

  async createPost(createPostDto: CreatePostDto, userId: number): Promise<Posts> {
    const post: Posts = new Posts();
    post.title = createPostDto.title;
    post.content = createPostDto.content;
    post.user = { id: createPostDto.userId } as any; 
    return this.postsRepository.save(post);
  }
  findAllPost(): Promise<Posts[]> {
    return this.postsRepository.find();
  }

  viewPost(id: number): Promise<Posts> {
    return this.postsRepository.findOneBy({ id });
  }

  updatePost(id: number, updatePostDto: UpdatePostDto): Promise<Posts> {
    const post: Posts = new Posts();
    post.title = updatePostDto.title;
    post.content = updatePostDto.content;
    post.id = id;
    return this.postsRepository.save(post);
  }

  removePost(id: number): Promise<{ affected?: number }> {
    return this.postsRepository.delete(id);
  }
}