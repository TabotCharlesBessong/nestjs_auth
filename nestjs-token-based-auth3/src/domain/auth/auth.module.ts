/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleController } from './google.controller';
import { AccessTokenJwtStrategy } from './strategies/access_jwt-strategy';
import { RefreshTokenJwtStrategy } from './strategies/refresh_jwt-strategy';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    // dynamic initialize of jwt module by passing config
    JwtModule.register({}),
    forwardRef(() => UserModule),
  ],
  controllers: [AuthController, GoogleController],
  providers: [AuthService, RefreshTokenJwtStrategy, AccessTokenJwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
