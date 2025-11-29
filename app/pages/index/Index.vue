<template>
  <div>
    <div class="custom-container md:mt-8">
      <DashboardLogo />
    </div>
    <PageStickyContainer :on-dashboard="true">
      <div class="custom-container">
        <!-- <SearchBox
          v-model="searchString"
          :on-dashboard="init"
          :search-songs="!showAuthors"
          :song-loading="songLoading"
          @enter="inputEnter"
          @clickBox="init = false"
        /> -->
      </div>
    </PageStickyContainer>
    <div class="custom-container">
      <!-- <InitFilters
          v-if="!$config.public.variation.hideTags"
          v-model="filters.tags"
          @update:modelValue="init = false"
        ></InitFilters> -->
      <div class="text-center mt-1">
        <BasicButton :to="{ name: 'search' }" icon-name="add" class="text-primary -ml-3">
          Zobrazit všechy písně
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
const { variation, titleSeparator } = useRuntimeConfig()?.public;

useHead(
  generateHead(
    variation.title + titleSeparator + 'chytrý křesťanský zpěvník',
    variation.description
  )
);
</script>
