<template>
  <div class="flex flex-col p-2">
    <div :class="['relative', containerClass, 'max-w-[243px]']">
      <!-- Поле ввода -->
      <!-- <input
        :type="type"
        v-model="inputValue"
        :placeholder="isPlaceholderVisible ? placeholder : ''"
        :class="[inputClasses, textAlignClass]"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        class="p-2 input-field peer"
      /> -->
      <input
        :type="type"
        v-model="inputValue"
        :placeholder="isPlaceholderVisible ? placeholder : ''"
        :class="[inputClasses, textAlignClass]"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        id="floatingInput"
        class="peer block w-full rounded border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <label
        for="floatingInput"
        class="absolute left-3 top-2.5 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
      >
        Email address
      </label>
      <!-- Картинка/Иконка -->
      <i
        v-if="iconClass"
        :class="['absolute', iconClass, iconPositionClass]"
        style="transform: none"
      >
      </i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, defineProps, defineEmits } from "vue";

const props = defineProps<{
  type?: string;
  modelValue: string;
  placeholder?: string;
  containerClass?: string; // Класс для контейнера
  iconClass?: string; // Класс для иконки
  textAlignClass?: string; // Класс для выравнивания текста
  iconPositionClass?: string; // Позиция иконки (left-0 или right-0)
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const inputValue = ref(props.modelValue);
const isFocused = ref(false);
const showError = ref(false);
const isPlaceholderVisible = ref(true);

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue;
    isPlaceholderVisible.value = !newValue; // Плейсхолдер видим, если поле пустое
  }
);

const handleInput = () => {
  emit("update:modelValue", inputValue.value);
  isPlaceholderVisible.value = inputValue.value.trim() === "";
  showError.value = false; // Убираем сообщение об ошибке сразу при вводе текста
};

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
  showError.value = inputValue.value.trim() === ""; // Показываем ошибку, если поле пустое
};

const inputClasses = `border border-gray-300 rounded-md pl-10 pr-10 transition duration-300`;
</script>

<style>
/* input::placeholder {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  font-size: 1rem;
  color: #aaa;
}

input:focus::placeholder {
  top: -10px;
  font-size: 0.75rem;
  color: #3b82f6;
  
} */
/* input::placeholder {
  position: absolute;
  left: 10px;
  top: 16px;
  font-size: 1rem;
  color: #aaa;
  transition: all 0.3s ease;
}

input:focus::placeholder {
  top: -15px; /* Плейсхолдер поднимется */
/* font-size: 20px; Уменьшается в размере */
/* color: #3b82f6; Синий цвет при фокусе */
/* background: white; */
/* } */
/* input:focus { */
/* outline: none; */
/* box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); */
/* padding-top: 1rem; Уменьшаем отступ сверху при фокусе */
/* } */
</style>
