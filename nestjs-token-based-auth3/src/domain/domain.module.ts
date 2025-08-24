/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DBModule } from "src/database/db.module";
import { UserEntity } from "./user/entity/user.entity";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DBModule.forRoot({
      entities:[UserEntity]
    })
  ],
  controllers: [],
  providers: [],
  exports: [],
})

export class DomainModule {}