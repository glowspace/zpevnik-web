<template>
  <h3 v-if="title">{{ title }}</h3>
  <div class="member-list">
    <div v-for="{ name, role } in members" class="member">
      {{ name }}<br /><span class="text-gray">{{ role }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  members: Array,
});
</script>

<style lang="postcss" scoped>
.member-list {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4;
}
</style>
