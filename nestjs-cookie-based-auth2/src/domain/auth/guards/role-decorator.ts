/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';
import { UserRoles } from '../auth.dto';

export const RoleAllowed = (...role: UserRoles[]) => SetMetadata('roles', role);
