<template>
  <div class="custom-container">
    <div class="mx-5 my-4 md:mt-6">
      <div class="flex items-start justify-between">
        <h1 class="text-2xl font-custom-medium">{{ names[0] }}</h1>
        <div class="-my-2 -mr-4 shrink-0">
          <BasicButton
            icon-name="chevron_left"
            icon-only
            :to="sideStore.previous"
            :disabled="!sideStore.previous"
          />
          <BasicButton
            icon-name="chevron_right"
            icon-only
            :to="sideStore.next"
            :disabled="!sideStore.next"
          />
        </div>
      </div>
      <p class="text-lg" v-if="names.length > 1">{{ names.slice(1).join(', ') }}</p>
      <div class="mt-1 text-sm basic-content">
        <song-author-label :song="song" />
        <song-info :song="song" />
      </div>
    </div>
  </div>
  <song-box :song_lyric="song"></song-box>
</template>

<script setup>
import SongAuthorLabel from './components/SongAuthorLabel';
import SongBox from './components/SongBox/SongBox';
import { getNames } from '~/components/Song/Name';
import useSideStore from '~/stores/side';
const sideStore = useSideStore();

const props = defineProps(['song']);
const { variation } = useRuntimeConfig()?.public;
const names = computed(() => getNames(props.song, variation?.songbook));
</script>
