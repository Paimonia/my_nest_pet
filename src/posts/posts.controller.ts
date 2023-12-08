import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PostService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto, @Query('userId') userId: number) {
    return this.postsService.createPost(createPostDto, userId);
  }

  @Get()
  findAll() {
    return this.postsService.findAllPost();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findPostById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.updatePost(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.removePost(+id);
  }
}
