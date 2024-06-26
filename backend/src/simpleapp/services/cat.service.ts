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
import { CategoryProcessor } from '../generate/processors/cat.processor';
//import { Category,CategoryHooks} from '../generate/types';
import * as types from '../generate/types';
export { Category} from '../generate/types';

@Injectable()
export class CategoryService extends CategoryProcessor {
     
   
      
   //protected hooks: types.CategoryHooks = {}
    constructor(
        @InjectModel('Category')  mydoc: Model<types.Category>
        ){
        super(mydoc)
    }

/***************************** begin x-document-api definitions *****************************************/
/*
*/

/***************************** end x-document-api definitions *****************************************/
}
