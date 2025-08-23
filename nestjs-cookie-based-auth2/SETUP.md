# Setup Guide - Fix JWT Strategy Error

## Problem
The application was failing with the error: `JwtStrategy requires a secret or key` because JWT secrets were not configured.

## Solution
I've centralized the JWT configuration and provided default values. However, for production use, you should set proper environment variables.

## Environment Variables Setup

### Option 1: Create a .env file (Recommended)
Create a `.env` file in the project root with the following content:

```bash
# JWT Configuration
access_token_secret=your-super-secure-access-token-secret-key-here
refresh_token_secret=your-super-secure-refresh-token-secret-key-here

# Database Configuration
DB_HOST=localhost
DB_PORT=5433
DB_USERNAME=api
DB_PASSWORD=development_pass
DB_DATABASE=api-database

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379

# Application Configuration
PORT=3000
NODE_ENV=development
```

### Option 2: Set Environment Variables in PowerShell
```powershell
$env:access_token_secret="your-super-secure-access-token-secret-key-here"
$env:refresh_token_secret="your-super-secure-refresh-token-secret-key-here"
```

### Option 3: Set Environment Variables in Command Prompt
```cmd
set access_token_secret=your-super-secure-access-token-secret-key-here
set refresh_token_secret=your-super-secure-refresh-token-secret-key-here
```

## What Was Fixed

1. **Centralized JWT Configuration**: Created `src/config/jwt.config.ts` to manage all JWT-related settings
2. **Default Values**: Provided fallback secrets so the app can run without environment variables (NOT recommended for production)
3. **Configuration Consistency**: Updated all JWT strategies and services to use the centralized configuration
4. **App Module Update**: Added JWT configuration loading to the main app module

## Security Note
⚠️ **IMPORTANT**: The default secrets in the configuration are for development only. 
- Change them immediately for production use
- Use strong, randomly generated secrets
- Never commit real secrets to version control

## Running the Application
After setting up the environment variables:

```bash
# Install dependencies
yarn install

# Start the application
yarn start:dev
```

The JWT strategy error should now be resolved.
