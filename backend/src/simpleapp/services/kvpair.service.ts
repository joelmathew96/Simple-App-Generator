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
import { KeyvaluepairProcessor } from '../generate/processors/kvpair.processor';
//import { Keyvaluepair,KeyvaluepairHooks} from '../generate/types';
import * as types from '../generate/types';
export { Keyvaluepair} from '../generate/types';

@Injectable()
export class KeyvaluepairService extends KeyvaluepairProcessor {
     
   
      
   //protected hooks: types.KeyvaluepairHooks = {}
    constructor(
        @InjectModel('Keyvaluepair')  mydoc: Model<types.Keyvaluepair>
        ){
        super(mydoc)
    }

/***************************** begin x-document-api definitions *****************************************/
/*
*/

/***************************** end x-document-api definitions *****************************************/
}
