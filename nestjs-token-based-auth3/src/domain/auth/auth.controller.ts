/* eslint-disable prettier/prettier */
// Native.

// Package.
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConsumes,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { UserSigInDto } from './dto/auth-request.dto';
import { UserSignInResponseDto } from './dto/auth-response.dto';
import { AccessTokenGuard } from './guards/access_token.guard';
import { RefreshTokenGuard } from './guards/refresh_token.guard';

@ApiBearerAuth('authorization')
@Controller('auth')
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
)
@ApiTags('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  // define all our user routes
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ description: 'user login api returns access token' })
  @ApiOkResponse({
    description: 'user  has been login successfully',
    type: UserSignInResponseDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'internal server error occurred',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  @ApiConsumes('application/json')
  @Post('/login')
  public async Login(@Body() body: UserSigInDto) {
    const response = await this.service.validateUserByPassword(body);
    return response;
  }

  @UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.OK)
  @ApiConsumes('application/json')
  @Get('/logout')
  public async logout() {
    return 'logout';
  }

  @UseGuards(RefreshTokenGuard)
  @HttpCode(HttpStatus.OK)
  @ApiConsumes('application/json')
  @Post('/refresh')
  public async refreshToken(@Req() req: any) {
    const user = req.user;
    const token = await this.service.refreshToken(user);
    return token;
    //res.cookie("access_token", token.access_token, {
    //  httpOnly: true,
    //  sameSite: "lax",
    //});
    //res.cookie("refresh_token", token.refresh_token, {
    //  httpOnly: true,
    //  sameSite: "lax",
    //});
    return token;
  }
}
