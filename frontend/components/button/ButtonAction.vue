<template>
  <ButtonDefault v-if="!actionName" :animate="animate"
    ><slot></slot>def</ButtonDefault
  >
  <ButtonPrimary
    v-else-if="['create', 'update','print'].includes(actionName)"
    :animate="animate"
    ><slot></slot
  ></ButtonPrimary>
  <ButtonDanger
    v-else-if="['delete', 'void'].includes(actionName)"
    :animate="animate"
    ><slot></slot
  ></ButtonDanger>
  <ButtonWarning v-else :animate="animate"><slot></slot></ButtonWarning>
</template>
<script setup lang="ts">
/**
 * This file was automatically generated by simpleapp generator during initialization. It is changable.
 * --remove-this-line-to-prevent-override--
 * last change 2024-03-01
 * author: Ks Tan
 */
const props = defineProps<{ actionName?: string; animate?: boolean }>();
</script>
