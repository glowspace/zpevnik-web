<template>
  <ToolboxContainer>
    <div>Tmavý režim</div>
    <ClientOnly>
      <BasicButtonGroup>
        <BasicButtonGroupItem
          centered
          @click="colorMode.preference = 'system'"
          :class="{ active: colorMode.preference == 'system' }"
        >
          <BasicIcon class="text-xl" name="desktop_windows" />
        </BasicButtonGroupItem>
        <BasicButtonGroupItem
          centered
          @click="colorMode.preference = 'light'"
          :class="{ active: colorMode.preference == 'light' }"
        >
          <BasicIcon class="text-xl" name="light_mode" />
        </BasicButtonGroupItem>
        <BasicButtonGroupItem
          centered
          @click="colorMode.preference = 'dark'"
          :class="{ active: colorMode.preference == 'dark' }"
        >
          <BasicIcon class="text-xl" name="dark_mode" />
        </BasicButtonGroupItem>
      </BasicButtonGroup>
    </ClientOnly>
  </ToolboxContainer>
</template>

<script setup>
const colorMode = useColorMode();
</script>
