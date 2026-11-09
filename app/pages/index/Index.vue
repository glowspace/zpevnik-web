<template>
  <div>
    <div class="custom-container md:mt-8">
      <DashboardLogo />
    </div>
    <PageStickyContainer :on-dashboard="true">
      <div class="custom-container" @click="openSearch()">
        <SearchInputBox fake dashboard @update:modelValue="openSearch" />
      </div>
    </PageStickyContainer>
    <div class="custom-container">
      <DashboardInitFilters v-if="!$config.public.variation.hideTags"></DashboardInitFilters>
      <div class="text-center mt-1">
        <BasicButton
          :to="{ name: 'search' }"
          @click="searchStore.resetBasicSearch()"
          icon-name="add"
          class="text-primary dark:text-primary-200 -ml-3"
        >
          Zobrazit všechny písně
        </BasicButton>
      </div>
    </div>
    <div
      class="p-5 mb-5 sm:grid sm:grid-cols-2 gap-x-7 gap-y-5 space-y-4 sm:space-y-0 max-w-[1000px] mx-auto"
    >
      <Dashboard />
    </div>
  </div>
</template>

<script setup>
import useSearchStore from '~/stores/search';

const { variation, titleSeparator } = useRuntimeConfig()?.public;
const searchStore = useSearchStore();
const route = useRoute();
const router = useRouter();

useHead(
  generateHead(
    variation.title + titleSeparator + 'chytrý křesťanský zpěvník',
    variation.description,
  ),
);

const legacySearchParams = [
  'vyhledavani',
  'stitky',
  'jazyky',
  'zpevniky',
  'autori',
  'razeni',
  'nahoda',
];

onMounted(() => {
  if (legacySearchParams.some((param) => param in route.query)) {
    router.replace({ name: 'search', query: route.query });
  }
});

function openSearch(str = '') {
  searchStore.resetBasicSearch(str);
  router.push({ name: 'search' });
}
</script>
