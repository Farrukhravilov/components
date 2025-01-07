<template>
  <div class="flex flex-col p-2 w-full">
    <div :class="['relative', containerClass, 'w-[100%]']">
      <input
        v-mask="mask"
        type="text"
        v-model="phoneValue"
        :placeholder="isPlaceholderVisible ? placeholder : ''"
        :class="computedInputClasses"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        id="floatingInput"
        class="peer block w-full rounded border border-gray-500  bg-gray-500 px-3 pt-4 pb-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
import { ref, watch, computed, defineProps, defineEmits } from "vue";

// Описание пропсов
const props = defineProps<{
  type?: string;
  modelValue: string;
  placeholder?: string;
  containerClass?: string;
  iconClass?: string;
  textAlignClass?: string;
  inputClasses?: string | string[]; // Добавлено описание inputClasses
  iconPositionClass?: string;
}>();

const mask = ref("+998 (##) ### ## ##");
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const phoneValue = ref(props.modelValue || "");
const isFocused = ref(false);
const isPlaceholderVisible = ref(!phoneValue.value);

// Вычисляемое свойство для классов input
const computedInputClasses = computed(() => {
  const baseClasses = props.inputClasses
    ? Array.isArray(props.inputClasses)
      ? props.inputClasses
      : [props.inputClasses]
    : [];
  const alignmentClass = props.textAlignClass ? [props.textAlignClass] : [];
  return [...baseClasses, ...alignmentClass];
});

// Наблюдение за внешними изменениями modelValue
watch(
  () => props.modelValue,
  (newValue) => {
    phoneValue.value = newValue;
    isPlaceholderVisible.value = !newValue;
  }
);

// Наблюдение за внутренними изменениями phoneValue
watch(phoneValue, (newValue) => {
  emit("update:modelValue", newValue);
});

// Событие фокуса
const handleFocus = () => {
  isFocused.value = true;
};

// Событие потери фокуса
const handleBlur = () => {
  isFocused.value = false;
};

// Обработка изменений ввода
const handleInput = (event: InputEvent) => {
  const target = event.target as HTMLInputElement;
  phoneValue.value = target.value; // Просто обновляем значение
};
</script>

<style scoped>
/* Добавьте стили при необходимости */
</style>
