<template>
  <SimpleAppFieldContainer
    :hidelabel="hidelabel"
    v-model="modelValue"
    :label="label"
    :description="description"
    :pt="pt"
    :inputType="inputType"
    :setting="setting"
    :instancepath="instancepath"
    :error="error"
    #default="slotprops"
    :resetcount="resetcount"
  >
    <Checkbox
      v-if="inputType == SimpleAppInputType.checkbox"
      :readonly="isReadonly"
      :pt="pt"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      v-model="modelValue"
      :binary="true"
      v-bind="componentProps as CheckboxProps"
      @change="onChange"
    />
    <InputSwitch
      v-else-if="inputType == SimpleAppInputType.switch"
      :readonly="isReadonly"
      :pt="pt"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      v-model="modelValue as boolean"
      :binary="true"
      v-bind="componentProps as InputSwitchProps"
      @change="onChange"
    />
    <!--
    <InputText
      type="date"
      :pt="pt"
      v-else-if="inputType == SimpleAppInputType.date"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      v-model="datevalue"
      @update:modelValue="updateDate"
      :readonly="isReadonly"
      :placeholder="placeholder"
      v-bind="componentProps as InputTextProps"
    /> -->
    <!-- calendar component -->
    <Calendar
      type="date"
      :pt="pt"
      v-else-if="
        SimpleAppInputType.calendar == inputType ||
        inputType == SimpleAppInputType.date
      "
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      v-model="datevalue"
      @update:modelValue="updateDate"
      :touchUI="isMobile()"
      showButtonBar
      :readonly="isReadonly"
      :placeholder="placeholder"
      :date-format="getDateFormat()"
      v-bind="componentProps as CalendarProps"
    />

    <!-- time component -->
    <Calendar
      :pt="pt"
      v-else-if="inputType == SimpleAppInputType.time"
      timeOnly
      showTime
      hourFormat="12"
      @update:modelValue="updateTime"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      v-model="timevalue"
      :readonly="isReadonly"
      :placeholder="placeholder"
      v-bind="componentProps as CalendarProps"
    />

    <Calendar
      :pt="pt"
      v-else-if="inputType == SimpleAppInputType.datetime"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      v-model="datetimevalue"
      @update:modelValue="updateDateTime"
      :touchUI="isMobile()"
      showButtonBar
      :readonly="isReadonly"
      :placeholder="placeholder"
      :date-format="getDateFormat()"
      showTime
      hourFormat="12"
      v-bind="componentProps as CalendarProps"
    />
    <!-- select/list component -->
    <Listbox
      v-model="modelValue"
      :pt="pt"
      v-else-if="SimpleAppInputType.list == inputType"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      :readonly="isReadonly"
      class="w w-full lg:w-full"
      :disabled="isReadonly"
      :options="getListOptions()"
      optionLabel="label"
      optionValue="value"
      :placeholder="placeholder"
      v-bind="componentProps as ListboxProps"
      @change="onChange"
    />

    <Dropdown
      v-model="modelValue"
      :pt="pt"
      v-else-if="SimpleAppInputType.select == inputType"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      :readonly="isReadonly"
      class="w w-full lg:w-full"
      :disabled="isReadonly"
      :options="getListOptions()"
      optionLabel="label"
      optionValue="value"
      :placeholder="placeholder"
      v-bind="componentProps"
      @change="onChange"
    />


    <MultiSelect
      v-model="modelValue"
      :pt="pt"
      v-else-if="SimpleAppInputType.selectmultiple == inputType"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      :readonly="isReadonly"
      class="w w-full lg:w-full"
      :disabled="isReadonly"
      :options="getListOptions()"
      optionLabel="label"
      optionValue="value"
      :placeholder="placeholder"
      v-bind="componentProps"
      @change="onChange"
    />
    <!-- radio component -->
    <div v-else-if="inputType == SimpleAppInputType.radio">
      <div v-for="(item, index) in getListOptions()">
        <RadioButton
          :pt="pt"
          v-model="modelValue"
          :inputId="setting.key + '-' + index"
          name="smaple"
          :value="item.value"
          :readonly="isReadonly"
          @change="onChange"
        />
        {{ " " }}
        <label :for="setting.key + '-' + index"> {{ item.label }} </label>
      </div>
    </div>

    <!-- autocomplete, need do more enterprise grade component-->
    <SimpleAppAutocomplete
      v-else-if="inputType == SimpleAppInputType.autocomplete"
      v-model="modelValue as autocompletetype"
      :hidelabel="hidelabel"
      :pt="pt"
      :setting="setting"
      :disabled="isReadonly"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      :readonly="isReadonly"
      :placeholder="placeholder"
      :autocompleteFilter="autocompleteFilter"
      @change="onChange"
    />
    <!-- v-bind:attributes="componentProps" -->
    <!--  document no input-->
    <SimpleAppDocumentNo
      v-else-if="inputType == SimpleAppInputType.documentno"
      :setting="setting"
      v-model="modelValue as string"
      :inputId="slotprops.uuid"
      :readonly="isReadonly"
      @update:docNoFormat="triggerDocNoFormatChange"
      :pt="pt"
      :path="setting.instancepath"
      v-bind="componentProps as any"
      @change="onChange"
    />
    <!-- use componentProps as any at the moment, no ideal yet, and for compatibility -->

    <!-- password -->
    <Password
      v-else-if="inputType == SimpleAppInputType.password"
      :type="type"
      v-model="modelValue as string"
      :pt="pt"
      @focus="setFocus"
      :readonly="isReadonly"
      class="flex flex-col"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      @change="onChange"
      :placeholder="placeholder"
      v-bind="componentProps as PasswordProps"
    />

    <!-- rating -->
    <Rating
      v-else-if="inputType == SimpleAppInputType.rating"
      :type="type"
      v-model="modelValue as number"
      :pt="pt"
      :readonly="isReadonly"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      @change="onChange"
      v-bind="componentProps as RatingProps"
    />

    <!-- chip -->
    <Chips
      v-else-if="inputType == SimpleAppInputType.chip"
      :type="type"
      v-model="modelValue as string[]"
      :pt="pt"
      :disabled="isReadonly"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      :placeholder="placeholder"
      @update:modelValue="onChange"
      v-bind="componentProps as ChipsProps"
    />
    <!-- simple component  -->

    <InputNumber
      v-else-if="inputType == SimpleAppInputType.number"
      :type="type"
      v-model="modelValue"
      @focus="setFocus"
      :readonly="isReadonly"
      :pt="pt"
      :class="!pt ? 'w-full flex flex-col' : ''"
      :inputId="slotprops.uuid"
      @update:modelValue="onChange"
      :path="setting.instancepath"
      v-bind="componentProps as InputNumber"
      :placeholder="placeholder"
    />
    <!-- // // -->
    <InputNumber
      v-else-if="inputType == SimpleAppInputType.money"
      :type="type"
      v-model="modelValue as number"
      @focus="setFocus"
      :max-fraction-digits="2"
      :min-fraction-digits="2"
      :readonly="isReadonly"
      :pt="pt"
      :class="!pt ? 'w-full flex flex-col' : ''"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      @update:modelValue="onChange"
      v-bind="componentProps as InputNumber"
      :placeholder="placeholder"
    />
    <Textarea
      v-else-if="inputType == SimpleAppInputType.textarea"
      v-model="modelValue as string"
      :autofocus="autofocus"
      :readonly="isReadonly"
      :pt="pt"
      :type="type"
      class="w-full flex flex-col"
      :inputId="slotprops.uuid"
      :path="setting.instancepath"
      @change="onChange"
      :placeholder="placeholder"
      v-bind="componentProps as TextareaProps"
    />
    <InputText
      v-else
      v-model="modelValue as string"
      @focus="setFocus"
      :autofocus="autofocus"
      :readonly="isReadonly"
      :pt="pt"
      :type="type"
      class="w-full flex flex-col"
      :inputId="slotprops.uuid"
      @change="onChange"
      :path="setting.instancepath"
      :placeholder="placeholder"
      v-bind="componentProps as InputTextProps"
    />
    <!-- component require special treatment -->

    <slot name="footer"></slot>
  </SimpleAppFieldContainer>
</template>

<script lang="ts" setup>
/**
 * This file was automatically generated by simpleapp generator. Every
 * MODIFICATION OVERRIDE BY GENERATEOR
 * last change 2023-10-28
 * Author: Ks Tan
 */
import { autocompletetype } from "~/types";
import moment from "moment";
import AutoComplete, { AutoCompleteProps } from "primevue/autocomplete";
import Calendar, { CalendarProps } from "primevue/calendar";
import Checkbox, { CheckboxProps } from "primevue/checkbox";
import Chips, { ChipsProps } from "primevue/chips";
import SimpleAppDocumentNo from "./SimpleAppDocumentNo.vue";
import SimpleAppAutocomplete from "./SimpleAppAutocomplete.vue";
import Dropdown, { DropdownProps } from "primevue/dropdown";
import InputNumber, { InputNumberProps } from "primevue/inputnumber";
import InputSwitch, { InputSwitchProps } from "primevue/inputswitch";
import InputText, { InputTextProps } from "primevue/inputtext";
import Listbox, { ListboxProps } from "primevue/listbox";
import MultiSelect, { MultiSelectProps } from "primevue/multiselect";
import Password, { PasswordProps } from "primevue/password";
import RadioButton, { RadioButtonProps } from "primevue/radiobutton";
import Rating, { RatingProps } from "primevue/rating";
import Slider, { SliderProps } from "primevue/slider";
import Textarea, { TextareaProps } from "primevue/textarea";
import { SimpleAppInputType } from "~/types";
const resetcount = ref(0);
const instancepath = ref("");
const modelValue = defineModel({ required: true });

const datevalue = ref<Date>();
const datetimevalue = ref<Date>();
const timevalue = ref<Date>();
let watchOnChange = 0;
const props = withDefaults(
  defineProps<{
    inputType: SimpleAppInputType;
    label?: string;
    description?: string;
    error?: string;
    setting: any;
    type?: string;
    instancepath?: string;
    hidelabel?: boolean;
    readonly?: boolean;
    autofocus?: boolean;
    pt?: any;
    placeholder?: string;
    autocompleteFilter?: any;
    componentProps?:
      | InputNumberProps
      | InputSwitchProps
      | InputTextProps
      | TextareaProps
      | DropdownProps
      | CalendarProps
      | RatingProps;
  }>(),
  { type: "text" },
);

const pt = ref(props.pt);

if (props.inputType == SimpleAppInputType.date && modelValue.value) {
  datevalue.value = stringToDate(<string>modelValue.value); //.format("YYYY-MM-DD");
} else {
  datevalue.value = undefined;
}
if (props.inputType == SimpleAppInputType.datetime && modelValue.value) {
  datetimevalue.value = stringToDate(<string>modelValue.value);
} else {
  datetimevalue.value = undefined;
}

if (props.inputType == SimpleAppInputType.time) {
  if (modelValue.value) {
    timevalue.value = stringToDate(
      (today() + "T" + modelValue.value) as string,
    ); //.format("YYYY-MM-DD");
  } else {
    timevalue.value = undefined;
  }
}

if (props?.instancepath) instancepath.value = props.instancepath;
else if (props.setting?.instancepath)
  instancepath.value = props.setting.instancepath;
else instancepath.value = "/unknown";

watch(props.setting.errors, (newvalue, oldvalue) => {
  let errmsg = "";
  if (newvalue[instancepath.value]) {
    const errlist: any[] = newvalue[instancepath.value];
    for (let i = 0; i < errlist.length; i++) {
      errmsg += errlist[i].message + ",";
    }
  } else {
    errmsg = "";
  }
  if (errmsg != "") {
    const errorstyle = { style: "border-color: lightcoral; color:lightcoral " };
    if (!pt.value) pt.value = {};

    if (props.inputType == SimpleAppInputType.text)
      pt.value = { root: errorstyle };
    else if (props.inputType == SimpleAppInputType.autocomplete)
      pt.value = { input: errorstyle };
    else if (props.inputType == SimpleAppInputType.number)
      pt.value = { input: { root: errorstyle } };
    else pt.value = { root: errorstyle, input: { root: errorstyle } };
    //some component still not working
  } else {
    pt.value = props.pt;
  }
});
const isReadonly = computed(() => {
  if (props.readonly) {
    return props.readonly;
  } else if (props.setting.readonly) {
    return props.setting.readonly;
  } else {
    return false;
  }
});
const updateTime = (value: Date) => {
  value.setSeconds(0);
  modelValue.value = dateToTimeString(value);
  onChange();
};
const updateDate = (value: any) => {
  if (value) {
    modelValue.value = dateToString(value);
  } else {
    modelValue.value = "";
  }
  onChange();
};
const updateDateTime = (value: any) => {
  if (value) {
    modelValue.value = dateToISOString(value);
  } else {
    modelValue.value = "";
  }
  onChange();
};

const setFocus = (ev: any) => {
  if (!isMobile()) ev.target.select();
};

const getListOptions = () => {
  const options = [];  
  const enumlist = props.setting.fieldsetting.type == 'array' 
      ? props.setting.fieldsetting.items.enum 
      : props.setting.fieldsetting.enum 

  

  if (enumlist) {
    for (let i = 0; i < enumlist.length; i++) {
      const v = enumlist[i];
      if (typeof v == "string") {
        options.push({ value: v, label: t(v) });
      } else {
        options.push({ value: v.value, label: t(v.label) });
      }
    }
  }
  return options;
};

const emits = defineEmits([
  "change",
  "update:modelValue",
  "update:docNoFormat",
]);

const getDateFormat = () => {
  return getPrimevueCalendarDateFormat();
};

watch(modelValue, (newvalue: any) => {
  if (
    [SimpleAppInputType.date, SimpleAppInputType.calendar].includes(
      props.inputType,
    )
  ) {
    if (modelValue.value) {
      datevalue.value = stringToDate(modelValue.value as string);
    } else {
      timevalue.value = undefined;
    }
  } else if (props.inputType == SimpleAppInputType.datetime) {
    if (modelValue.value) {
      datetimevalue.value = stringToDate(modelValue.value as string);
    } else {
      timevalue.value = undefined;
    }
  } else if (props.inputType == SimpleAppInputType.time) {
    if (modelValue.value) {
      timevalue.value = stringToDate(
        (today() + "T" + modelValue.value) as string,
      );
    } else {
      timevalue.value = undefined;
    }
  }
});
onMounted(() => {
  if (
    [SimpleAppInputType.date, SimpleAppInputType.calendar].includes(
      props.inputType,
    )
  ) {
    if (modelValue.value) {
      datevalue.value = stringToDate(modelValue.value as string);
    } else {
      datevalue.value = undefined;
    }
  } else if (props.inputType == SimpleAppInputType.datetime) {
    if (modelValue.value) {
      datetimevalue.value = stringToDate(modelValue.value as string);
    } else {
      datetimevalue.value = undefined;
    }
  } else if (props.inputType == SimpleAppInputType.time) {
    if (modelValue.value) {
      timevalue.value = stringToDate(
        (today() + "T" + modelValue.value) as string,
      );
    } else {
      timevalue.value = undefined;
    }
  }
});

const onChange = () => {
  pt.value = undefined;
  resetcount.value++;
  emits("change", modelValue.value);
};

/************ start autocomplete only ***************/

/************ end autocomplete only ***************/

const triggerDocNoFormatChange = (formatdata: any) => {
  emits("update:docNoFormat", formatdata);
};
</script>
