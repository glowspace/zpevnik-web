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
  @apply bg-surface-200 shadow rounded-xl overflow-hidden;

  :slotted(.list-item) {
    @apply flex items-center gap-3 px-4 py-3 hover:bg-surface-50 border-gray-100;

    &:not(:last-child) {
      @apply border-b;
    }
  }

  :deep(.list-icon),
  :deep(.list-note) {
    @apply inline-flex justify-center items-center text-gray-700;

    &:first-child {
      @apply text-center w-7 h-6;
    }

    &:last-child {
      @apply ml-auto text-gray;
    }
  }

  :deep(.list-note) {
    @apply px-1;
  }
}
</style>
