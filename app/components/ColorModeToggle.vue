<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <ClientOnly>
    <BasicButton
      :icon-name="colorMode.value === 'dark' ? 'light_mode' : 'dark_mode'"
      icon-only
      @click="toggleColorMode"
    />
    <template #fallback>
      <BasicButton icon-name="dark_mode" icon-only />
    </template>
  </ClientOnly>
</template>
