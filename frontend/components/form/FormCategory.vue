  
<template>    
    <div>
         
            <title v-if="id">{{ data.categoryName }}</title>
         
    <SimpleAppForm #default="o" :document="doc">                    
        <SimpleAppFormToolBar  :document="doc" @on="actionListener"></SimpleAppFormToolBar>        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
               
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                 
                                        <SimpleAppInput :input-type="SimpleAppInputType.text"  :setting="o.getField('#/properties/categoryCode')" v-model="data.categoryCode" />            
                  
                    
                                 
                                        <SimpleAppInput :input-type="SimpleAppInputType.text"  :setting="o.getField('#/properties/categoryName')" v-model="data.categoryName" />            
                  
                    
                            <SimpleAppInput :input-type="SimpleAppInputType.checkbox"  :setting="o.getField('#/properties/active')" v-model="data.active" />                    
                                 
                                    <SimpleAppInput :input-type="SimpleAppInputType.select"  :setting="o.getField('#/properties/categoryType')" v-model="data.categoryType" />            
                  
                    
                                 
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
 import { Category } from "~/simpleapp/generate/types";
import { CategoryDoc} from "~/simpleapp/docs/CategoryDoc"


 const props = defineProps<{ _id?: string, doc?: CategoryDoc , paras?:Category}>();
 const doc = props.doc ??  useNuxtApp().$CategoryDoc()
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