import { ref } from "vue";

export function useTheme() {
  // Храним состояние темной темы
  const isDarkMode = ref(false);

  // Функция для переключения темы
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;

    // Добавляем/удаляем класс dark на body
    if (isDarkMode.value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  return {
    isDarkMode,
    toggleTheme,
  };
}
