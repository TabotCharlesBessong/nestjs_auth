/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DBModule } from './database/db.module';
import { UserEntity } from './domain/user/entity/user.entity';
import { UserModule } from './domain/user/user.module';
import { AuthModule } from './domain/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DBModule.forRoot({
      entities:[UserEntity]
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
