<template>
    <LazyFormUser :_id="_id" class="w-full" @after="after"/>
</template>

<script setup lang="ts">
/**
 * This file was automatically generated by simpleapp generator.
 * --remove-this-line-to-prevent-override--
 * last change 2023-09-09
 * author: Ks Tan
 */

import {User} from '~/simpleapp/generate/types'
const doc = useNuxtApp().$UserDoc()
const _id = getPathPara('id','')

const after = (actionName: string, data: User) => {    
  console.log("User capture after emits ", actionName)
  switch (actionName) {
    case "exit":
      goTo(doc.getDocName());
      break;
    case "create":
      goTo(doc.getDocName(), data._id);      
      refreshDocumentList(doc.getDocName())
      useNuxtApp().$event('CloseDialog',doc.getDocName().toLowerCase())
      break;
    case "update":
      refreshDocumentList(doc.getDocName());
      useNuxtApp().$event('CloseDialog',doc.getDocName().toLowerCase())
      break;
    case "delete":
      goTo(doc.getDocName(), "new");
      refreshDocumentList(doc.getDocName())
      useNuxtApp().$event('CloseDialog',doc.getDocName().toLowerCase())
      break;
  }
};
</script>
