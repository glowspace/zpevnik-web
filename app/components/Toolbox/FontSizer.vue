<template>
  <ToolboxContainer>
    <div>Velikost písma</div>
    <BasicButtonGroup>
      <BasicButtonGroupItem
        centered
        @click="fontSizePercent -= 10"
        :disabled="fontSizePercent == 70"
      >
        <BasicIcon name="remove" />
      </BasicButtonGroupItem>
      <BasicButtonGroupItem centered @click="fontSizePercent = 100">
        {{ ((fontSizePercent - 100) / 10).toString().replace('-', '&minus;') }}
      </BasicButtonGroupItem>
      <BasicButtonGroupItem centered @click="fontSizePercent += 10">
        <BasicIcon name="add" />
      </BasicButtonGroupItem>
    </BasicButtonGroup>
  </ToolboxContainer>
</template>

<script setup>
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
const refreshHandler = ref(null);

const fontSizePercent = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    let sl = import.meta.client ? document.getElementById('song-lyrics') : null;

    if (sl) {
      if (!sl.style.height) {
        sl.style.height = sl.clientHeight + 'px';
      }

      if (refreshHandler.value) {
        clearTimeout(refreshHandler.value);
      }

      // prevent screen jumping
      refreshHandler.value = setTimeout(() => {
        sl.style.height = null;
      }, 1000);
    }

    emit('update:modelValue', value);
  },
});
</script>
