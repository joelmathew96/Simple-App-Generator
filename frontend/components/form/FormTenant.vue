  
<template>    
    <div>
         
            <title v-if="id">{{ data.tenantName }}</title>
         
    <SimpleAppForm #default="o" :document="doc">                    
        <SimpleAppFormToolBar  :document="doc" @on="actionListener"></SimpleAppFormToolBar>        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
               
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                 
                                        <SimpleAppInput :input-type="SimpleAppInputType.text"  :setting="o.getField('#/properties/tenantName')" v-model="data.tenantName" />            
                  
                    
                            <SimpleAppInput :input-type="SimpleAppInputType.checkbox"  :setting="o.getField('#/properties/active')" v-model="data.active" />                    
                                 
                                        <SimpleAppInput :input-type="SimpleAppInputType.text"  :setting="o.getField('#/properties/description')" v-model="data.description" />            
                  
                    
                              
            <SimpleAppInput :input-type="SimpleAppInputType.autocomplete"  :setting="o.getField('#/properties/owner')" v-model="data.owner" />            
                
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
 import { Tenant } from "~/simpleapp/generate/types";
import { TenantDoc} from "~/simpleapp/docs/TenantDoc"


 const props = defineProps<{ _id?: string, doc?: TenantDoc , paras?:Tenant}>();
 const doc = props.doc ??  useNuxtApp().$TenantDoc()
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