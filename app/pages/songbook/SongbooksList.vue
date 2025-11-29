<template>
  <div>
    <PageTopBar title="Zpěvníky" full-width class="lg:px-4">
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
            href: $config.public.adminUrl + '/songbook',
          },
        ]"
      />
    </PageTopBar>
    <div>
      <template v-if="pending">
        <!-- todo: loader -->
      </template>
      <div
        v-else-if="songbooks"
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 my-8 mx-8"
      >
        <template v-for="songbook in songbooks">
          <BasicLink
            v-if="!songbook.is_private"
            :to="{ name: 'songbook', params: { id: songbook.id } }"
          >
            <div class="aspect-[4/3] w-full overflow-hidden rounded-lg">
              <img v-if="songbook.songbook_img_url" :src="songbook.songbook_img_url" />
              <div v-else class="fallback-image" />
            </div>
            <div class="mt-4">{{ songbook.name }}</div>
          </BasicLink>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import gql from 'graphql-tag';

const FETCH_SONGBOOKS = gql`
  query {
    songbooks {
      id
      name
      is_private
      songbook_img_url
    }
  }
`;

// load data
const { data, pending } = await useLazyAsyncQuery(FETCH_SONGBOOKS);
const songbooks = computed(() => data.value?.songbooks);

// head content
const { variation, titleSeparator } = useRuntimeConfig()?.public;
useHead(
  generateHead(
    'Zpěvníky' + titleSeparator + variation.title,
    `Všechny zpěvníky digitalizované v projektu ${variation.title}`
  )
);
</script>

<style lang="postcss" scoped>
.fallback-image {
  @apply h-full;
  background: url('/img/logo.svg') center no-repeat #eee;
  background-size: 50%;
}
</style>
