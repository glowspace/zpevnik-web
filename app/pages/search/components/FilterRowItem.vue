<template>
  <BasicChip class="hover:!bg-surface-200 dark:hover:!bg-surfacedark-500">
    <slot />
    <BasicIcon v-if="variant != 'readonly'" name="close" class="-mx-1 text-lg" />
  </BasicChip>
</template>

<script setup>
const props = defineProps(['variant']);
</script>
