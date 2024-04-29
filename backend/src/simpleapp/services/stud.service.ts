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
import { StudentProcessor } from '../generate/processors/stud.processor';
//import { Student,StudentHooks} from '../generate/types';
import * as types from '../generate/types';
export { Student} from '../generate/types';

@Injectable()
export class StudentService extends StudentProcessor {
     
   
      
   //protected hooks: types.StudentHooks = {}
    constructor(
        @InjectModel('Student')  mydoc: Model<types.Student>
        ){
        super(mydoc)
    }

/***************************** begin x-document-api definitions *****************************************/
/*
*/

/***************************** end x-document-api definitions *****************************************/
}