/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './domain/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DBModule } from './database/db.module';
import { UserEntity } from './domain/user/user.entity';
import { AuthModule } from './domain/auth/auth.module';
import { RedisModule } from './redis/redis.module';


@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({}),
    DBModule.forRoot({
      entities:[UserEntity]
    }),
    RedisModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
