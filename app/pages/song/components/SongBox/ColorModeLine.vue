<template>
  <ToolboxContainer>
    <div>Tmavý režim</div>
    <ClientOnly>
      <BasicButtonGroup>
        <BasicButtonGroupItem
          centered
          @click="colorMode.preference = 'system'"
          :class="{ active: colorMode.preference == 'system' }"
          class="w-14"
        >
          <BasicIcon class="text-xl" name="desktop_windows" />
        </BasicButtonGroupItem>
        <BasicButtonGroupItem
          centered
          @click="colorMode.preference = 'light'"
          :class="{ active: colorMode.preference == 'light' }"
          class="w-14"
        >
          <BasicIcon class="text-xl" name="light_mode" />
        </BasicButtonGroupItem>
        <BasicButtonGroupItem
          centered
          @click="colorMode.preference = 'dark'"
          :class="{ active: colorMode.preference == 'dark' }"
          class="w-14"
        >
          <BasicIcon class="text-xl" name="dark_mode" />
        </BasicButtonGroupItem>
      </BasicButtonGroup>
    </ClientOnly>
  </ToolboxContainer>
</template>

<script setup>
import ToolboxContainer from './ToolboxContainer.vue';
const colorMode = useColorMode();
</script>
