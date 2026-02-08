<template>
  <NuxtLayout>
    <PageTopBar :title="'Chyba ' + error.statusCode" is-h1 />
    <div class="custom-container">
      <ErrorCard :status-code="error.statusCode" />
    </div>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps(['error']);
const { variation, titleSeparator } = useRuntimeConfig()?.public;

useHead({
  ...generateHead('Chyba ' + props.error.statusCode + titleSeparator + variation.title, ''),
  htmlAttrs: { lang: 'cs', dir: 'ltr' },
  link: getLinks(),
});

onMounted(() => {
  if ('stack' in props.error) {
    console.error(props.error.stack);
  }
});
</script>
