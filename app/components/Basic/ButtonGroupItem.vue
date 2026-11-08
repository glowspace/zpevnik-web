<template>
  <BasicClickable
    :class="{ 'segmented-item': true, centered }"
    class="min-w-14"
    :disabled="disabled"
  >
    <slot />
  </BasicClickable>
</template>

<script setup>
const props = defineProps({ centered: Boolean, disabled: Boolean });
</script>

<style lang="postcss" scoped>
.segmented-item {
  @apply [&.active]:bg-primary-150 dark:[&.active]:bg-primary-900
  hover:bg-surface-400 dark:hover:bg-surfacedark-400
  h-10 relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 pl-3 pr-5 text-sm tracking-[.00714em]
  font-custom-medium border border-gray-500 transition
  mr-[-1px] overflow-hidden select-none;

  &:first-child {
    @apply pl-4;
  }

  &:last-child {
    @apply pr-5;
  }
}

.segmented-item:disabled {
  @apply pointer-events-none opacity-30;
}

.segmented-item.centered {
  @apply pl-3 pr-3;

  &:first-child {
    @apply pl-4;
  }

  &:last-child {
    @apply pr-4;
  }
}

.segmented-item::after {
  @apply rounded-none;
}

.segmented-item:first-child {
  @apply rounded-l-full;
}

.segmented-item:last-child {
  @apply mr-0 rounded-r-full;
}
</style>
