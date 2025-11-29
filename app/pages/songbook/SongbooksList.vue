<template>
  <div>
    <PageTopBar title="Zpěvníky" full-width class="lg:px-4">
      <Kebab
        v-if="songbook"
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
      <div v-else-if="songbooks" class="grid grid-cols-4">
        <template v-for="songbook in songbooks">
          <BasicClickable
            v-if="!songbook.is_private"
            :to="{ name: 'songbook', params: { id: songbook.id } }"
          >
            <div class="aspect-video w-full overflow-hidden">
              <img v-if="songbook.songbook_img_url" :src="songbook.songbook_img_url" />
            </div>
            <div>{{ songbook.name }}</div>
          </BasicClickable>
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
