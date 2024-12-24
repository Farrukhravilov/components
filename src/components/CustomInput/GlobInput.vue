<template>
  <div class="flex flex-col p-2">
    <div :class="['relative', containerClass, 'max-w-[243px]']">
      <!-- Поле ввода -->
      <input
        :type="type"
        v-model="phoneValue"
        :placeholder="isPlaceholderVisible ? placeholder : ''"
        :class="[inputClasses, textAlignClass]"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        id="floatingInput" class="peer block w-full rounded border border-gray-300
        bg-transparent px-3 pt-5 pb-2 text-gray-900 focus:border-blue-500
        focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <label
        for="floatingInput"
        class="absolute left-3 top-2.5 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
      >
        Phone number
      </label>
      <!-- Картинка/Иконка -->
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
  type?: string; // Убедитесь, что тип передается сюда
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

const phoneValue = ref(props.modelValue || ""); // Инициализируем значение
const isFocused = ref(false);
const isPlaceholderVisible = ref(!phoneValue.value); // Логика видимости плейсхолдера

// Следим за обновлением внешнего значения
watch(
  () => props.modelValue,
  (newValue) => {
    phoneValue.value = newValue;
    isPlaceholderVisible.value = !newValue; // Плейсхолдер виден, если поле пустое
  }
);

// Следим за внутренним значением
watch(phoneValue, (newValue) => {
  emit("update:modelValue", newValue); // Обновляем родительский компонент
});

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

// Общая функция для обработки ввода
const handleInput = (event: InputEvent) => {
  const target = event.target as HTMLInputElement;

  // Применяем маску только если тип - number
  if (props.type === "number") {
    mask(event);
  } else {
    phoneValue.value = target.value; // Просто обновляем значение без маски
  }
};

// Маска для номера телефона
const mask = (event: InputEvent) => {
  const target = event.target as HTMLInputElement;
  const inputValue = target.value.replace(/\D/g, "");
  const template = "+998 (__) ___-__-__";
  let maskedValue = "";

  let index = 0;

  for (const char of template) {
    if (char === "_") {
      if (index < inputValue.length) {
        maskedValue += inputValue[index];
        index++;
      } else {
        maskedValue += "_";
      }
    } else {
      maskedValue += char;
    }
  }

  phoneValue.value = maskedValue; // обновляем значение с маской
  emit("update:modelValue", maskedValue); // отправляем в родительский компонент
};
</script>

<style scoped>
/* Добавьте ваши стили здесь */
</style>
