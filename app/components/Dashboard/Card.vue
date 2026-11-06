<template>
  <div>
    <div class="mx-4 my-3 flex items-center justify-between">
      <h2 v-if="title" class="text-xl font-custom-bold">{{ title }}</h2>
      <BasicClickable v-if="moreLink" :to="moreLink" class="group flex items-center gap-1">
        <span class="group-hover:underline">Zobrazit vše</span><BasicIcon name="chevron_right" />
      </BasicClickable>
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ title: String, moreLink: [String, Object] });
</script>

<style lang="postcss" scoped>
.card-body {
  @apply bg-surface-200 dark:bg-surfacedark-200 shadow rounded-xl overflow-hidden divide-y;

  :slotted(.card-item) {
    @apply flex items-center gap-3 px-4 py-3 hover:bg-surface-50 dark:hover:bg-surfacedark-50 border-gray-100 dark:border-gray-900;
  }

  :deep(.card-icon),
  :deep(.card-note) {
    @apply inline-flex justify-center items-center text-gray-700 dark:text-gray-300;

    &:first-child {
      @apply text-center w-7 h-6;
    }

    &:last-child {
      @apply ml-auto text-gray;
    }
  }

  :deep(.card-note) {
    @apply px-1;
  }
}
</style>
