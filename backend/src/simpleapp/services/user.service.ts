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
import { UserProcessor } from '../generate/processors/user.processor';
//import { User,UserHooks} from '../generate/types';
import * as types from '../generate/types';
export { User} from '../generate/types';

@Injectable()
export class UserService extends UserProcessor {
     
  protected strictIsolation = false; 
      
   //protected hooks: types.UserHooks = {}
    constructor(
        @InjectModel('User')  mydoc: Model<types.User>
        ){
        super(mydoc)
    }

/***************************** begin x-document-api definitions *****************************************/
/*
*/

/***************************** end x-document-api definitions *****************************************/
}