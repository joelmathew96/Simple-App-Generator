  
<template>

   <PageDocList :document="doc" :columns="columns" :data="docdata" :sorts="sorts">
   <template #mobileList="{index,item}">
   </template>
   <template #dataTableColumns>
                                                                                                                                                                                                                                                                                                                                                                                                                            <Column #body="{index,data}" :header="t('categoryCode')">
            <RendererLink :value="data" :setting="{path:'category'}" :fields="['categoryCode']">{{ data.categoryCode }}</RendererLink>
          </Column>

                                                        <Column #body="{index,data}" :header="t('categoryName')">
            <RendererLink :value="data" :setting="{path:'category'}" :fields="['categoryName']">{{ data.categoryName }}</RendererLink>
          </Column>

                                                          <Column #body="{index,data}" :header="t('active')">
              {{data.active}}
            </Column>          
                                                          <Column #body="{index,data}" :header="t('categoryType')">
              {{data.categoryType}}
            </Column>          
                                                          <Column #body="{index,data}" :header="t('description')">
              {{data.description}}
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
import { Category } from '~/simpleapp/generate/openapi';

  
  const {$CategoryDoc,$listen } = useNuxtApp();
  const doc = $CategoryDoc()
  const docdata = doc.getReactiveData();
  type CategoryKey = keyof Category 

  definePageMeta({
    menuPath:'nocategory/category'    
  });

  const columns:CategoryKey[] = [                                                                                                                                                                                                                                                                                                                        'categoryCode',
                                    'categoryName',
                                    'active',
                                    'categoryType',
                                    'description',
            ]





  const sorts:string[][] = [
            ['categoryCode','asc'],
        ]

const id=computed(()=>useRoute().params.id)
</script>

  