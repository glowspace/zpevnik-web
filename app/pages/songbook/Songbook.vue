<template>
  <div class="grid grid-cols-1 md:grid-cols-[60%_1fr] xl:grid-cols-[66%_1fr]">
    <div>
      <PageTopBar :title="songbook?.name ?? 'načítám…'" full-width class="lg:px-4">
        <BasicButton icon-name="filter_alt" icon-only icon-fill :to="filterLink" />
        <Kebab
          :items="[
            {
              label: 'Nahlásit',
              icon: 'warning',
              href: getReportLink(),
            },
            {
              label: 'Upravit',
              icon: 'edit',
              href: !songbook ? '' : $config.public.adminUrl + '/songbook/' + songbook.id + '/edit',
            },
          ]"
        />
      </PageTopBar>
      <div>
        <div>
          <template v-if="pending">
            <!-- todo: loader -->
          </template>
          <template v-else-if="!songbook">
            <!-- displayed only after client-side navigation (SSR throws) -->
            <ErrorCard :status-code="404" />
          </template>
          <template v-else>
            <SongList :filters="filters" :sort="sort" :seed="0" :per-page="50"></SongList>
          </template>
        </div>
      </div>
    </div>
    <div
      class="hidden md:block sticky top-0 p-8 h-screen overflow-auto border-l border-primary-150 bg-surface-50"
    >
      <img v-if="songbook?.songbook_img_url" :src="songbook.songbook_img_url" />
    </div>
  </div>
</template>

<script setup>
import { toGETParameters } from '~/components/Search/HistoryManager.vue';
import { emptyFilters } from '~/stores/search';
import gql from 'graphql-tag';

const FETCH_SONGBOOK = gql`
  query ($id: ID!) {
    songbook(id: $id) {
      id
      name
      is_private
      songbook_img_url
    }
  }
`;

// load data
const route = useRoute();
const id = route.params.id;
const { data, pending } = await useLazyAsyncQuery(FETCH_SONGBOOK, { id });
const songbook = computed(() => (data.value?.songbook?.is_private ? null : data.value?.songbook));

if (import.meta.server) {
  checkNotFound(songbook.value);
}

// head content
const { variation, titleSeparator } = useRuntimeConfig()?.public;
const title = computed(
  () => (songbook.value?.name ?? 'Zpěvník') + titleSeparator + variation.title
);
useHead(generateHead(title, 'I tento zpěvník u nás najdete'));

// other
const filters = computed(() => {
  var f = emptyFilters();
  f.songbooks[id] = true;
  return f;
});
const sort = { by: 2, desc: false };

const filterLink = computed(() => {
  return {
    name: 'search',
    query: toGETParameters({
      filters: filters.value,
      sort: sort,
    }),
  };
});
</script>
