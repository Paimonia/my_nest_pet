import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UserPost } from './entities/posts.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(UserPost) private readonly postRepository: Repository<UserPost>,
  ) {}

  async createPost(createPostDto: CreatePostDto, userId: number): Promise<UserPost> {
    const user = { id: createPostDto.userId } as any; 
    const post: UserPost = this.postRepository.create({
      ...createPostDto,
      user
    });
    return this.postRepository.save(post);
  }
    
  findAllPost(): Promise<UserPost[]> {
    return this.postRepository.find();
  }

  findPostById(id: number): Promise<UserPost> {
    return this.postRepository.findOne({ where: { id } });
  }

  
  updatePost(id: number, updatePostDto: UpdatePostDto): Promise<UserPost> {
    const post: UserPost = this.postRepository.create({
      ...updatePostDto
    });
    return this.postRepository.save(post);
  }

  removePost(id: number): Promise<{ affected?: number }> {
    return this.postRepository.delete(id);
  }
}