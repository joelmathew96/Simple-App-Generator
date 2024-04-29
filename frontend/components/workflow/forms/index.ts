/**
 * This file was automatically generated by simpleapp generator during initialization. It is changable.
 * --remove-this-line-to-prevent-override--
 * last change 2024-02-22
 * author: Ks Tan
 */
 
import dynamicfield from './dynamicfield.vue'
import simpleapprove from './simpleapprove.vue'

const forms: {[key:string]:Component}={
    dynamicfield:dynamicfield,
    simpleapprove:simpleapprove
}

export const getFormComponent =(formkey:string)=> forms[formkey] ?? forms['dynamicfield']
export {dynamicfield,simpleapprove}