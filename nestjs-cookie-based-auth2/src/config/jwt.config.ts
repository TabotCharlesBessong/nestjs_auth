/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  access_token_secret: process.env.access_token_secret || 'default-access-secret-change-in-production',
  refresh_token_secret: process.env.refresh_token_secret || 'default-refresh-secret-change-in-production',
  access_token_expires_in: process.env.access_token_expires_in || '1d',
  refresh_token_expires_in: process.env.refresh_token_expires_in || '7d',
}));
