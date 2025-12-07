<template>
  <div class="top-bar-wrapper">
    <div class="top-bar" :class="{ 'custom-container': !fullWidth }">
      <BasicButton
        v-if="historyBack"
        icon-name="arrow_back"
        icon-only
        @click="$router.back()"
      />
      <template v-else>
        <div class="md:hidden">
          <BasicButton icon-type="img" icon-name="logo.svg" icon-only to="/" />
        </div>
        <div class="hidden md:block">
          <BasicButton icon-name="arrow_back" icon-only disabled />
        </div>
      </template>
      <component
        :is="isH1 ? 'h1' : 'h2'"
        class="flex flex-grow justify-start text-[1.375rem] leading-7"
      >
        {{ title }}
      </component>
      <div class="flex flex-row justify-end items-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ title: String, isH1: Boolean, fullWidth: Boolean });
const historyBack = ref(false);
const router = useRouter();

onMounted(() => {
  historyBack.value = Boolean(router.options.history.state.back);
});
</script>

<style lang="postcss" scoped>
.top-bar-wrapper {
  @apply w-full sticky top-0 z-10 bg-surface-200 dark:bg-surfacedark-100
  shadow md:shadow-none md:border-b border-primary-150 print:hidden;
}

.top-bar {
  @apply h-16 md:h-20 flex flex-row items-center justify-between gap-1.5 px-1;
}
</style>
