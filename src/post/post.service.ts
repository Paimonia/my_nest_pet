import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Posts) private readonly postRepository: Repository<Posts>,
  ) {}

  async createPost(createPostDto: CreatePostDto, userId: number): Promise<Posts> {
    const post: Posts = new Posts();
    post.title = createPostDto.title;
    post.content = createPostDto.content;
    post.user = { id: createPostDto.userId } as any; 
    return this.postRepository.save(post);
  }
  findAllPost(): Promise<Posts[]> {
    return this.postRepository.find();
  }

  viewPost(id: number): Promise<Posts> {
    return this.postRepository.findOneBy({ id });
  }

  updatePost(id: number, updatePostDto: UpdatePostDto): Promise<Posts> {
    const post: Posts = new Posts();
    post.title = updatePostDto.title;
    post.content = updatePostDto.content;
    post.id = id;
    return this.postRepository.save(post);
  }

  removePost(id: number): Promise<{ affected?: number }> {
    return this.postRepository.delete(id);
  }
}