/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DBModule } from "src/database/db.module";
import { UserEntity } from "./user/entity/user.entity";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DBModule.forRoot({
      entities:[UserEntity]
    }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
  exports: [],
})

export class DomainModule {}