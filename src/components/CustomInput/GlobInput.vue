<template>
  <div class="flex flex-col p-2">
    <div :class="['relative', containerClass, 'max-w-[243px]']">
      <input
        v-mask="mask"
        type="text"
        v-model="phoneValue"
        :placeholder="isPlaceholderVisible ? placeholder : ''"
        :class="[inputClasses, textAlignClass]"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        id="floatingInput"
        class="peer block w-full rounded border border-gray-300 bg-transparent px-3 pt-4 pb-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <label
        for="floatingInput"
        class="absolute left-3 top-2.5 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
      >
        Phone number
      </label>
      <i
        v-if="iconClass"
        :class="['absolute', iconClass, iconPositionClass]"
        style="transform: none"
      ></i>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps<{
  type?: string;
  modelValue: string;
  placeholder?: string;
  containerClass?: string;
  iconClass?: string;
  textAlignClass?: string;
  iconPositionClass?: string;
}>();
const mask = ref("+998 (##) ### ## ##")
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const phoneValue = ref(props.modelValue || "");
const isFocused = ref(false);
const isPlaceholderVisible = ref(!phoneValue.value);

// Watch for external modelValue updates
watch(
  () => props.modelValue,
  (newValue) => {
    phoneValue.value = newValue;
    isPlaceholderVisible.value = !newValue;
  }
);

// Watch for internal phoneValue changes
watch(phoneValue, (newValue) => {
  emit("update:modelValue", newValue);
});

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

// Handle input changes
const handleInput = (event: InputEvent) => {
  const target = event.target as HTMLInputElement;
  phoneValue.value = target.value; // Just update the value
};
</script>

<style scoped>
/* Add your styles here */
</style>
