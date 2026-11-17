<template>
  <DashboardCard title="Poslední položky" v-if="userStore.history && userStore.history.length">
    <BasicClickable v-for="item in userStore.history" :to="item.path" class="card-item">
      <BasicIcon :name="icons[item.type]" class="card-icon" />
      <span>{{ item.label }}</span>
      <span class="card-note">{{ item.note }}</span>
    </BasicClickable>
  </DashboardCard>
</template>

<script setup>
import useUserStore from '~/stores/user';
const userStore = useUserStore();

const icons = {
  song: 'music_note',
  songbook: 'book',
  author: 'person',
};
</script>
