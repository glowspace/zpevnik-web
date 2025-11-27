<template>
  <div
    class="hidden md:block sticky top-0 flex-grow-0 flex-shrink-0 w-2/5 xl:w-1/3 h-screen overflow-auto border-r border-primary-150"
    v-if="sideStore.params != null"
    v-show="sideStore.index != null"
  >
    <BasicClickable :to="editQueryLink">
      <StickyContainer :onDashboard="false" class="min-h-[81px]">
        <div class="input-box cursor-text">
          <div class="py-2 px-4">
            <span v-if="sideStore.params.searchString">{{ sideStore.params.searchString }}</span>
            <span v-else class="text-gray-400">Hledat píseň podle názvu, čísla nebo textu…</span>
          </div>
        </div>
        <Filters
          class="pt-0 pb-1 px-4 overflow-hidden whitespace-nowrap pointer-events-none empty:hidden"
          filter-row-variant="readonly"
          v-model:filters="sideStore.params.filters"
          :show-authors="false"
          v-model:sort="sideStore.params.sort"
          :search-string="sideStore.params.searchString"
        ></Filters>
      </StickyContainer>
    </BasicClickable>
    <SongList
      :search-string="sideStore.params.searchString"
      :filters="sideStore.params.filters"
      :sort="sideStore.params.sort"
      :seed="sideStore.params.seed"
      is-side
    ></SongList>
  </div>
</template>

<script setup>
import useSideStore from '~/stores/side';
const sideStore = useSideStore();
const route = useRoute();
const router = useRouter();
import StickyContainer from '~/pages/search/components/StickyContainer';
import Filters from '~/pages/search/components/Filters';
import { toGETParameters } from '~/components/Search/HistoryManager.vue';

const editQueryLink = computed(() => {
  const showSeed = !(sideStore.params.searchString || sideStore.params.sort.by);
  return {
    path: '/',
    query: toGETParameters({
      searchString: sideStore.params.searchString,
      filters: sideStore.params.filters,
      showAuthors: false,
      seed: showSeed ? sideStore.params.seed : null,
      sort: sideStore.params.sort,
    }),
  };
});

function fillSideStore() {
  const state = getSideState(router);

  if (state) {
    sideStore.params = state.list;
    sideStore.index = state.index;
  } else {
    sideStore.index = null;
  }
}

onMounted(() => {
  fillSideStore();
});

watch(route, (to) => {
  fillSideStore();
});
</script>
