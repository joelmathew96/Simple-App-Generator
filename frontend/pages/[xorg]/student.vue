  
<template>

   <PageDocList :document="doc" :columns="columns" :data="docdata" :sorts="sorts">
   <template #mobileList="{index,item}">
   </template>
   <template #dataTableColumns>
                                                                                                                                                                                                                                                                                                                                                                                                                            <Column #body="{index,data}" :header="t('studentName')">
            <RendererLink :value="data" :setting="{path:'student'}" :fields="['studentName']">{{ data.studentName }}</RendererLink>
          </Column>

                                                          <Column #body="{index,data}" :header="t('email')">
              {{data.email}}
            </Column>          
                                                          <Column #body="{index,data}" :header="t('email2')">
              {{data.email2}}
            </Column>          
                                                          <Column #body="{index,data}" :header="t('tel')">
              {{data.tel}}
            </Column>          
                                                          <Column #body="{index,data}" :header="t('active')">
              {{data.active}}
            </Column>          
                                                          <Column #body="{index,data}" :header="t('description')">
              {{data.description}}
            </Column>          
                                                          <Column #body="{index,data}" :header="t('docNoFormat')">
              <RendererViewer :value="data.docNoFormat" :setting="{documentName:'docnoformat'}" :fields="['docNoFormat']">{{ data.label }}</RendererViewer>
            </Column>            
                   </template>
   <template #default><div><NuxtPage :_id="id ?? 'new'"/></div></template>    
  </PageDocList>
</template>
<script setup lang="ts">
/**
 * This file was automatically generated by simpleapp generator.
 * --remove-this-line-to-prevent-override--
 * last change 2023-09-09
 * author: Ks Tan
 */
import { Student } from '~/simpleapp/generate/openapi';

  
  const {$StudentDoc,$listen } = useNuxtApp();
  const doc = $StudentDoc()
  const docdata = doc.getReactiveData();
  type StudentKey = keyof Student 

  definePageMeta({
    menuPath:'nocategory/student'    
  });

  const columns:StudentKey[] = [                                                                                                                                                                                                                                                                                                                        'studentName',
                                    'email',
                                    'email2',
                                    'tel',
                                    'active',
                                    'description',
                                        ]





  const sorts:string[][] = [
            ['studentid','asc'],
        ]

const id=computed(()=>useRoute().params.id)
</script>

  