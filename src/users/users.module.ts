import { Module } from '@nestjs/common';
import { UserssService } from './users.service';
import { UserssController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UserssController],
  providers: [UserssService],
})
export class UserssModule {}