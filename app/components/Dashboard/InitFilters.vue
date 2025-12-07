<template>
  <div
    :class="[
      { 'opacity-100': randomTags.length },
      'flex flex-row flex-wrap items-center opacity-0 h-10 overflow-hidden ml-6 mr-4',
    ]"
  >
    <BasicButton :to="{ name: 'search' }" icon-name="filter_alt" icon-fill icon-only compact />
    <ClientOnly>
      <BasicChip v-for="tag in randomTags" :key="tag.id" :to="getTagUrl(tag.id)">{{
        tag.name
      }}</BasicChip>
    </ClientOnly>
  </div>
</template>

<script>
import tagsFilters from '~/components/Search/tagsFilters';
import { toGETParameters } from '~/components/Search/HistoryManager.vue';
import { emptyFilters } from '~/stores/search';

const requiredAmountOfSongs = 10;
const sort = { by: 2, desc: false };

export default {
  apollo: {
    $prefetch: false,
    ...tagsFilters,
  },

  computed: {
    usefulTags() {
      // do not include regenschori tag types
      return [
        ...this.tags_generic.filter((t) => t.song_lyrics_count >= requiredAmountOfSongs),
        ...this.tags_liturgy_part.filter((t) => t.song_lyrics_count >= requiredAmountOfSongs),
        ...this.tags_liturgy_period.filter((t) => t.song_lyrics_count >= requiredAmountOfSongs),
        ...this.tags_saints.filter((t) => t.song_lyrics_count >= requiredAmountOfSongs),
        ...this.tags_sacred_occasion.filter((t) => t.song_lyrics_count >= requiredAmountOfSongs),
      ];
    },

    randomTags() {
      if (import.meta.client && this.$apollo.loading === false) {
        return this.shuffleArray(this.usefulTags).slice(0, 10);
      } else {
        return [];
      }
    },
  },

  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },

    getTagUrl(id) {
      var filters = emptyFilters();
      filters.tags[id] = true;
      return {
        name: 'search',
        query: toGETParameters({ filters }),
      };
    },
  },
};
</script>
