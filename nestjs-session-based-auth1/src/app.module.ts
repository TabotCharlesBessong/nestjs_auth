/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './domain/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DBModule } from './database/db.module';
import { UserEntity } from './domain/user/user.entity';
// import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { typeOrmConfig } from './database/config/typeorm.config';
// import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    // ConfigModule.forRoot({isGlobal: true}),
    // TypeOrmModule.forRoot(typeOrmConfig),
    // RedisModule, // Ensure RedisModule is imported here
    UsersModule,
    ConfigModule.forRoot({}),
    DBModule.forRoot({
      entities:[UserEntity]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
