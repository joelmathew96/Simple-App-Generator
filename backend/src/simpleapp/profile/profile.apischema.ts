/**
 * This file was automatically generated by simpleapp generator. Every
 * MODIFICATION OVERRIDE BY GENERATEOR
 * last change 2024-02-23
 * Author: Ks Tan
 */
import { ApiProperty } from '@nestjs/swagger';
import {ProfileUserInvites,ProfileUserBranch} from './profile.types'
export class RegTenantApiSchema {
  @ApiProperty({
    type: 'string',
    required: true,
    examples: ['my company 1'],
    default: '',
  })
  tenantName: string;
  @ApiProperty({
    type: 'string',
    required: true,
    examples: ['Asia/Kuala_Lumpur'],
    default: '',
  })
  timeZone: string;
  @ApiProperty({
    type: Number,
    required: true,
    examples: [0,-460],
    
  })
  utcOffset: number;
  
}
export class MyProfileApiSchemaBranches{
  @ApiProperty({type: 'string'})
  _id: '1231231';
  @ApiProperty({type: 'number'})
  tenantId: 2;
  @ApiProperty({type: 'number'})
  orgId: 1;
  @ApiProperty({type: 'number'})
  branchId: 1;
  @ApiProperty({type: 'string'})
  group: 'cashier';
  @ApiProperty({type: 'string'})
  xOrg: 'Mi0xLTE';
}
export class MyProfileApiSchemaInvites{
  @ApiProperty({type: 'string'})
  _id: string;
  @ApiProperty({type: 'string'})
  email: string;
  @ApiProperty({type: 'string'})
  created: string;
  permission: any[];
  // @ApiProperty({type: 'string'})
  // _id: '6527e3eff96dd5156e267bab';
  // @ApiProperty({type: 'number'})
  // tenantId: 2;
  // @ApiProperty({type: 'number'})
  // orgId: 1;
  // @ApiProperty({type: 'number'})
  // branchId: 1;
  // @ApiProperty({type: 'string'})
  // group: 'cashier';
  // @ApiProperty({type: 'string'})
  // xOrg: 'Mi0xLTE';
}
export class MyProfileApiSchema {
  @ApiProperty({type: 'string'})
  _id: string;
  @ApiProperty({type: 'number'})
  tenantId: number;
  @ApiProperty({type: 'number'})
  'orgId': number;
  @ApiProperty({type: 'number'})
  'branchId': number;
  @ApiProperty({type: 'string'})
  'email': string;
  @ApiProperty({type: 'number'})
  'uid': string;
  @ApiProperty({type: 'number'})
  'fullName': string;
  @ApiProperty({type: 'number'})
  'group': string;
  @ApiProperty({type: ['string']})
  'roles': string[];
  

  @ApiProperty({type: [MyProfileApiSchemaBranches]})
  'branches': ProfileUserBranch[]
  @ApiProperty({type: [MyProfileApiSchemaInvites]})
  'invites': ProfileUserInvites[];
  @ApiProperty({type: 'string'})
  'time': string;
}