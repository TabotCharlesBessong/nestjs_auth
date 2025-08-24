/* eslint-disable prettier/prettier */
export const envConfig = {
  access_token_secret: process.env.access_token_secret || 'default_access_token_secret_for_development_only_change_in_production',
  refresh_token_secret: process.env.refresh_token_secret || 'default_refresh_token_secret_for_development_only_change_in_production',
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://api:development_pass@localhost:5433/api-database',
  NODE_ENV: process.env.NODE_ENV || 'local',
};
