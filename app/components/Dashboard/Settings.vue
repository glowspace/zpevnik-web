<template>
  <div>
    <BasicButton @click="showSettings = true" icon-name="tune" icon-only />
    <PageBottomSheets v-model="showSettings" title="Nastavení">
      <ToolboxColorModeLine />
      <ToolboxFontSizer v-model="chordStore.fontSizePercent" />
      <ToolboxChordMode v-model="chordStore.showChords" />
      <div :class="{ 'opacity-40 pointer-events-none': !chordStore.showChords }">
        <ToolboxChordSharpFlat v-model="chordStore.accidentals" />
      </div>
      <ToolboxSimpleView v-model="chordStore.simpleView" />
    </PageBottomSheets>
  </div>
</template>

<script setup>
import useChordStore from '~/stores/chord';
const chordStore = useChordStore();
const showSettings = ref(false);
</script>
