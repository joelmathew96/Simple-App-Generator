  
<template>    
    <div>
         
            <title v-if="id">{{ data.invoiceTitle }}</title>
         
    <SimpleAppForm #default="o" :document="doc">                    
        <SimpleAppFormToolBar  :document="doc" @on="actionListener"></SimpleAppFormToolBar>        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
               
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                              
            <SimpleAppInput :input-type="SimpleAppInputType.autocomplete"  :setting="o.getField('#/properties/customer')" v-model="data.customer" />            
                    
                                 
                                    <SimpleAppInput :input-type="SimpleAppInputType.documentno"  :setting="o.getField('#/properties/invoiceNo')" v-model="data.invoiceNo" />                                    
                  
                    
                                 
                                    <SimpleAppInput :input-type="SimpleAppInputType.calendar"  :setting="o.getField('#/properties/invoiceDate')" v-model="data.invoiceDate" />            
                  
                    
                                 
                                        <SimpleAppInput :input-type="SimpleAppInputType.text"  :setting="o.getField('#/properties/invoiceTitle')" v-model="data.invoiceTitle" />            
                  
                    
                            <SimpleAppInput :input-type="SimpleAppInputType.number"  :setting="o.getField('#/properties/invoiceTotal')" v-model="data.invoiceTotal" />            
                    
                            <SimpleAppInputTable  :getField="o.getField" class="col-span-4"
                :setting="o.getField('#/properties/details')" v-model="data.details">
                                                                                         
                                                <Column field="product" #body="{index}" :header="camelCaseToWords('product')">                            
                                                            <SimpleAppInput :input-type="SimpleAppInputType.autocomplete"  :setting="o.getField('#/properties/details/items/properties/product')" v-model="data.details[index].product" :hidelabel="true":instancepath="`/details/${index}/product`"/>                                
                                                    </Column>                        
                                                                     
                                                <Column field="quantity" #body="{index}" :header="camelCaseToWords('quantity')">                            
                                                            <SimpleAppInput :input-type="SimpleAppInputType.number"  :setting="o.getField('#/properties/details/items/properties/quantity')" v-model="data.details[index].quantity" :hidelabel="true":instancepath="`/details/${index}/quantity`"/>                                
                                                    </Column>                        
                                                                     
                                                <Column field="unitPrice" #body="{index}" :header="camelCaseToWords('unitPrice')">                            
                                                            <SimpleAppInput :input-type="SimpleAppInputType.number"  :setting="o.getField('#/properties/details/items/properties/unitPrice')" v-model="data.details[index].unitPrice" :hidelabel="true":instancepath="`/details/${index}/unitPrice`"/>                                
                                                    </Column>                        
                                                                     
                                                <Column field="subTotal" #body="{index}" :header="camelCaseToWords('subTotal')">                            
                                                            <SimpleAppInput :input-type="SimpleAppInputType.number"  :setting="o.getField('#/properties/details/items/properties/subTotal')" v-model="data.details[index].subTotal" :hidelabel="true":instancepath="`/details/${index}/subTotal`"/>                                
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
 import { Invoice } from "~/simpleapp/generate/types";
import { InvoiceDoc} from "~/simpleapp/docs/InvoiceDoc"


 const props = defineProps<{ _id?: string, doc?: InvoiceDoc , paras?:Invoice}>();
 const doc = props.doc ??  useNuxtApp().$InvoiceDoc()
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