  
<template>    
    <div>
         
            <title v-if="id">{{ data.customerName }}</title>
         
    <SimpleAppForm #default="o" :document="doc">                    
        <SimpleAppFormToolBar  :document="doc" @on="actionListener"></SimpleAppFormToolBar>        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
               
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                 
                                    <SimpleAppInput :input-type="SimpleAppInputType.documentno"  :setting="o.getField('#/properties/customerNo')" v-model="data.customerNo" />                                    
                  
                    
                                 
                                        <SimpleAppInput :input-type="SimpleAppInputType.text"  :setting="o.getField('#/properties/customerName')" v-model="data.customerName" />            
                  
                    
                                 
                                    <SimpleAppInput :input-type="SimpleAppInputType.select"  :setting="o.getField('#/properties/customerStatus')" v-model="data.customerStatus" />            
                  
                    
                                 
                                                                                        <SimpleAppInput :input-type="SimpleAppInputType.text"  :setting="o.getField('#/properties/email')" v-model="data.email"type="email" />            
                                                                                        
                  
                    
                                 
                                                                                        <SimpleAppInput :input-type="SimpleAppInputType.text"  :setting="o.getField('#/properties/tel')" v-model="data.tel"type="tel" />            
                                                                                        
                  
                    
                            <SimpleAppInput :input-type="SimpleAppInputType.checkbox"  :setting="o.getField('#/properties/active')" v-model="data.active" />                    
                                 
                                    <SimpleAppInput :input-type="SimpleAppInputType.textarea"  :setting="o.getField('#/properties/description')" v-model="data.description" />            
                  
                    
                                
      </div>        
    </SimpleAppForm>
    <DebugDocumentData v-model="data" :label="doc.getDocName()"/>
    </div>
</template>


<script setup lang="ts">
/**
 * This file was automatically generated by simpleapp generator.
 * --remove-this-line-to-prevent-override--
 * last change 2024-02-16
 * Author: Ks Tan
 */
 import { SimpleAppInputType,FormCrudEvent } from "~/types";
 import { Customer } from "~/simpleapp/generate/types";
import { CustomerDoc} from "~/simpleapp/docs/CustomerDoc"


 const props = defineProps<{ _id?: string, doc?: CustomerDoc , paras?:Customer}>();
 const doc = props.doc ??  useNuxtApp().$CustomerDoc()
 const data = doc.getReactiveData(); 
 const emits = defineEmits(["after"]);
 const id = computed(() => props._id ?? "");

/************ start default methods ****************/

const newData = () =>  doc.setNew()

const getRecord = async () => {
  if(id.value && id.value != 'new'){
    await doc.getById(id.value)
  }else{
      newData()
    } 
}

getRecord()
watch(id,async ()=> await getRecord())
/************ end default methods ****************/


const actionListener = async (actionName: string) => {  
  emits('after',actionName,data.value)  
};

onMounted(async ()=> await actionListener(FormCrudEvent.mount))
/************ start api methods ****************/

/************ end api methods ****************/

</script>