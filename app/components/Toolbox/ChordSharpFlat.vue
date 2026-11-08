<template>
  <ToolboxContainer>
    <div>Posuvky</div>
    <BasicButtonGroup>
      <BasicButtonGroupItem
        centered
        @click="accidentals = 'auto'"
        :class="{ 'active icon-fill': accidentals == 'auto' }"
      >
        <BasicIcon class="text-xl" name="auto_awesome" />
      </BasicButtonGroupItem>
      <BasicButtonGroupItem
        centered
        @click="accidentals = 'sharp'"
        :class="{ active: accidentals == 'sharp' }"
      >
        <span class="text-lg">#</span>
      </BasicButtonGroupItem>
      <BasicButtonGroupItem
        centered
        @click="accidentals = 'flat'"
        :class="{ active: accidentals == 'flat' }"
      >
        <span class="text-lg">♭</span>
      </BasicButtonGroupItem>
    </BasicButtonGroup>
  </ToolboxContainer>
</template>

<script setup>
const accidentals = defineModel();
</script>
