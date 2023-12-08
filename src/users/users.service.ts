import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUsersDto } from './dto/update-user.dto';
import { User } from './entities/users.entity';

@Injectable()
  export class UsersService {
    constructor(
      @InjectRepository(User) private readonly usersRepository: Repository<User>,
    ) {}

    async createUser(createUserDto: CreateUsersDto): Promise<User> {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

      const user: User = this.usersRepository.create({
        ...createUserDto,
        password: hashedPassword,
      });
  
      return this.usersRepository.save(user);
    }

    findAllUsers(): Promise<User[]> {
      return this.usersRepository.find();
    }


    findUserById(id: number): Promise<User> {
      return this.usersRepository.findOne({ where: { id } });
    }

   async updateUser(id: number, updateUserDto: UpdateUsersDto): Promise<User> {
      const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
      const user: User = this.usersRepository.create({
        ...updateUserDto,
        password: hashedPassword,
      });
      return this.usersRepository.save(user);
    }

    removeUser(id: number): Promise<{ affected?: number }> {
      return this.usersRepository.delete(id);
    }
  }