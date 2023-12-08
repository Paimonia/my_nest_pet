import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUsersDto } from './dto/update-user.dto';
import { Users } from './entities/users.entity';

@Injectable()
  export class UserssService {
    constructor(
      @InjectRepository(Users) private readonly usersRepository: Repository<Users>,
    ) {}

    createUsers(createUsersDto: CreateUsersDto): Promise<Users> {
      const user: Users = new Users();
      user.name = createUsersDto.name;
      user.age = createUsersDto.age;
      user.email = createUsersDto.email;
      user.username = createUsersDto.username;
      user.password = createUsersDto.password;
      user.gender = createUsersDto.gender;
      return this.usersRepository.save(user);
    }


    findAllUsers(): Promise<Users[]> {
      return this.usersRepository.find();
    }


    viewUsers(id: number): Promise<Users> {
      return this.usersRepository.findOneBy({ id });
    }

    updateUsers(id: number, updateUsersDto: UpdateUsersDto): Promise<Users> {
      const user: Users = new Users();
      user.name = updateUsersDto.name;
      user.age = updateUsersDto.age;
      user.email = updateUsersDto.email;
      user.username = updateUsersDto.username;
      user.password = updateUsersDto.password;
      user.id = id;
      return this.usersRepository.save(user);
    }

    removeUsers(id: number): Promise<{ affected?: number }> {
      return this.usersRepository.delete(id);
    }
  }