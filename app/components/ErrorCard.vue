<template>
  <div class="shadow bg-surface-100 mx-4 my-12 px-6 py-4 inline-block">
    <p class="mb-3">
      <span v-if="statusCode == 404">
        Stránka nebyla nalezena. <br />Zkuste použít vyhledávání.
      </span>
      <span v-else>
        Ajajaj, někde se stala chyba.<br />
        Zkuste použít vyhledávání.
      </span>
    </p>
    <div class="-m-1">
      <BasicButton icon-name="search" type="primary" class="m-1" :to="{ name: 'search' }">
        Hledat
      </BasicButton>
      <BasicButton
        icon-name="warning"
        type="outlined"
        class="m-1"
        :href="getReportLink(null, statusCode)"
      >
        Nahlásit
      </BasicButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['statusCode']);
</script>
