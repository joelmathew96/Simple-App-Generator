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
import { AccountProcessor } from '../generate/processors/acc.processor';
//import { Account,AccountHooks} from '../generate/types';
import * as types from '../generate/types';
export { Account} from '../generate/types';

@Injectable()
export class AccountService extends AccountProcessor {
     
   
      
   //protected hooks: types.AccountHooks = {}
    constructor(
        @InjectModel('Account')  mydoc: Model<types.Account>
        ){
        super(mydoc)
    }

/***************************** begin x-document-api definitions *****************************************/
/*
*/

/***************************** end x-document-api definitions *****************************************/
}
