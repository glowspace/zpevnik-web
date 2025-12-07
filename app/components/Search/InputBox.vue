<template>
  <div
    class="flex flex-row items-center justify-between h-14 rounded-full bg-surface-100 dark:bg-surfacedark-100 p-2 m-2 border border-gray-500"
  >
    <BasicButton
      v-if="fake || !historyBack"
      icon-name="search"
      icon-only
      class="nohover"
      tabindex="-1"
    />
    <BasicButton v-else icon-name="arrow_back" icon-only @click="$router.back()" />
    <div v-if="fake" class="py-2 pl-1 pr-4 grow cursor-text overflow-hidden whitespace-nowrap">
      <span v-if="modelValue">{{ modelValue }}</span>
      <span v-else class="text-gray-400">{{ placeholder }}</span>
    </div>
    <input
      v-else
      type="search"
      :placeholder="placeholder"
      class="bg-transparent py-2 px-1 ring-0 focus:outline-none grow"
      :class="{ 'pr-4': !showCross }"
      v-model="valueModel"
      @keyup.enter="emit('enter')"
      ref="searchInput"
    />
    <LoaderCircular v-if="loading" size="6" class="mx-3" />
    <BasicButton
      v-else-if="showCross"
      icon-name="close"
      icon-only
      @click="
        emit('update:modelValue', '');
        searchInput.focus();
      "
    />
  </div>
</template>

<script setup>
import { debounce } from 'lodash-es';

const props = defineProps({
  modelValue: String,
  fake: Boolean,
  authors: Boolean,
  loading: Boolean,
});
const emit = defineEmits(['update:modelValue', 'enter']);
const debouncedValueEmit = debounce((value) => {
  emit('update:modelValue', value);
}, 500);

const searchInput = ref(null);
const historyBack = ref(false);
const router = useRouter();
const route = useRoute();

const valueModel = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    debouncedValueEmit(val);
  },
});
const showCross = computed(() => !props.fake && props.modelValue != '');
const placeholder = computed(() =>
  props.authors ? 'Hledat autora podle jména' : 'Hledat píseň podle názvu, čísla nebo textu…'
);

function updateHistoryBack() {
  historyBack.value = Boolean(router.options.history.state.back);
}

onMounted(() => {
  updateHistoryBack();

  if (!props.fake) {
    searchInput.value.focus();
  }
});

watch(route, () => updateHistoryBack());

onUnmounted(() => {
  debouncedValueEmit.cancel();
});
</script>
