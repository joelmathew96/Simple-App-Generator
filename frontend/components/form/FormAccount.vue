  
<template>    
    <div>
         
            <title v-if="id">{{ data.accTitle }}</title>
         
    <SimpleAppForm #default="o" :document="doc">                    
        <SimpleAppFormToolBar  :document="doc" @on="actionListener"></SimpleAppFormToolBar>        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
               
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                              
            <SimpleAppInput :input-type="SimpleAppInputType.autocomplete"  :setting="o.getField('#/properties/customer')" v-model="data.customer" />            
                    
                                 
                                        <SimpleAppInput :input-type="SimpleAppInputType.text"  :setting="o.getField('#/properties/accountName')" v-model="data.accountName" />            
                  
                    
                                 
                                    <SimpleAppInput :input-type="SimpleAppInputType.documentno"  :setting="o.getField('#/properties/accountNo')" v-model="data.accountNo" />                                    
                  
                    
                                 
                                    <SimpleAppInput :input-type="SimpleAppInputType.calendar"  :setting="o.getField('#/properties/accountDate')" v-model="data.accountDate" />            
                  
                    
                                 
                                        <SimpleAppInput :input-type="SimpleAppInputType.text"  :setting="o.getField('#/properties/accountTitle')" v-model="data.accountTitle" />            
                  
                    
                            <SimpleAppInput :input-type="SimpleAppInputType.number"  :setting="o.getField('#/properties/accountTotal')" v-model="data.accountTotal" />            
                    
                            <SimpleAppInputTable  :getField="o.getField" class="col-span-4"
                :setting="o.getField('#/properties/details')" v-model="data.details">
                                                                                         
                                                <Column field="invoice" #body="{index}" :header="camelCaseToWords('invoice')">                            
                                                            <SimpleAppInput :input-type="SimpleAppInputType.autocomplete"  :setting="o.getField('#/properties/details/items/properties/invoice')" v-model="data.details[index].invoice" :hidelabel="true":instancepath="`/details/${index}/invoice`"/>                                
                                                    </Column>                        
                                                                     
                                                <Column field="accountStatus" #body="{index}" :header="camelCaseToWords('accountStatus')">                            
                                                            <SimpleAppInput :input-type="SimpleAppInputType.number"  :setting="o.getField('#/properties/details/items/properties/accountStatus')" v-model="data.details[index].accountStatus" :hidelabel="true":instancepath="`/details/${index}/accountStatus`"/>                                
                                                    </Column>                        
                                                                     
                                                <Column field="active" #body="{index}" :header="camelCaseToWords('active')">                            
                                                            <SimpleAppInput :input-type="SimpleAppInputType.number"  :setting="o.getField('#/properties/details/items/properties/active')" v-model="data.details[index].active" :hidelabel="true":instancepath="`/details/${index}/active`"/>                                
                                                    </Column>                        
                                                                     
                                                <Column field="balance" #body="{index}" :header="camelCaseToWords('balance')">                            
                                                            <SimpleAppInput :input-type="SimpleAppInputType.number"  :setting="o.getField('#/properties/details/items/properties/balance')" v-model="data.details[index].balance" :hidelabel="true":instancepath="`/details/${index}/balance`"/>                                
                                                    </Column>                        
                                                                                                                                                                                                                                                                                        <Column #body="{index}" header="Delete">
                            <Button class="btn-danger" type="button" @click="data.details.splice(index,1)">X</Button>
                        </Column>
            </SimpleAppInputTable>
                    
                                 
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
 import { Account } from "~/simpleapp/generate/types";
import { AccountDoc} from "~/simpleapp/docs/AccountDoc"


 const props = defineProps<{ _id?: string, doc?: AccountDoc , paras?:Account}>();
 const doc = props.doc ??  useNuxtApp().$AccountDoc()
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