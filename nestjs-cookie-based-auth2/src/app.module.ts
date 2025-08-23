/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { ConfigModule } from '@nestjs/config';
import { DBModule } from './database/db.module';
import { UserEntity } from './domain/user/entity/user.entity';
import jwtConfig from './config/jwt.config';

@Module({
  imports: [
    DomainModule,
    ConfigModule.forRoot({ 
      isGlobal: true,
      load: [jwtConfig],
    }),
    DBModule.forRoot({
      entities:[UserEntity]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
