/**
 * This file was automatically generated by simpleapp generator. It is changable
 * --remove-this-line-to-prevent-override--
 * last change 2024-02-23
 * Author: Ks Tan
 */

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UserContext } from '../generate/commons/user.context';
import { TenantProcessor } from '../generate/processors/tenant.processor';
//import { Tenant,TenantHooks} from '../generate/types';
import * as types from '../generate/types';
export { Tenant} from '../generate/types';

@Injectable()
export class TenantService extends TenantProcessor {
     
   
      
   //protected hooks: types.TenantHooks = {}
    constructor(
        @InjectModel('Tenant')  mydoc: Model<types.Tenant>
        ){
        super(mydoc)
    }

/***************************** begin x-document-api definitions *****************************************/
/*
*/

/***************************** end x-document-api definitions *****************************************/
}