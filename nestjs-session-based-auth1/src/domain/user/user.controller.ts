/* eslint-disable prettier/prettier */
import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('signup')
  async createUser(@Body() body: CreateUserDto) {
    const existingUser = await this.userService.findByEmail(body.email);
    if (existingUser) {
      throw new ConflictException(`User already exists`);
    }
    const hashPassword = await bcrypt.hash(body.password, 10);
    const newUser = await this.userService.create({
      ...body,
      password: hashPassword,
      // If 'role' is not a property of UserEntity, remove it from here
    });
    return {
      message: 'User created successfully',
      user: { id: newUser.id, email: newUser.email },
    };
  }
}
