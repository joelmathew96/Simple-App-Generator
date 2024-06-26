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
import { ProductProcessor } from '../generate/processors/prd.processor';
//import { Product,ProductHooks} from '../generate/types';
import * as types from '../generate/types';
export { Product} from '../generate/types';

@Injectable()
export class ProductService extends ProductProcessor {
     
   
      
   //protected hooks: types.ProductHooks = {}
    constructor(
        @InjectModel('Product')  mydoc: Model<types.Product>
        ){
        super(mydoc)
    }

/***************************** begin x-document-api definitions *****************************************/
/*
*/

/***************************** end x-document-api definitions *****************************************/
}
