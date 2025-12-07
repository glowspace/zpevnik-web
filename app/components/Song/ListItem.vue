<template>
  <tr :class="{ active, 'scroll-m-56': scrollIntoView }" ref="row">
    <td v-if="display.number" class="hidden lg:table-cell text-gray text-right w-16 text-sm">
      <BasicClickable class="pl-7 p-3 whitespace-nowrap" tabindex="-1" :to="linkObject">
        {{ songbookPrefix + songNumber }}
      </BasicClickable>
    </td>
    <td>
      <BasicClickable
        class="block p-3 lg:pl-3"
        :class="{ 'md:pl-7': display.padding }"
        :to="linkObject"
      >
        <span v-if="forceNumber" :class="{ 'lg:hidden': display.number }">{{ songNumber }}. </span>
        <SongName :song="song_lyric" :songbook-id="songbookId" multiline :active="active" />
      </BasicClickable>
    </td>
    <td
      v-if="display.authors"
      class="text-gray hidden"
      :class="[display.authors == 'min' ? 'lg:table-cell' : 'sm:table-cell']"
    >
      <SongAuthorLabel v-if="display.authors == 'max'" :song="song_lyric" class="text-sm" />
      <span v-else v-for="(ap, authorIndex) in song_lyric.authors_pivot" :key="authorIndex">
        <span v-if="authorIndex">, </span>
        <BasicLink
          :to="ap.pivot.author.public_route"
          :title="
            song_lyric.type ? authorshipTypes['LYRICS'] : authorshipTypes[ap.pivot.authorship_type]
          "
        >
          {{ ap.pivot.author.name }}
        </BasicLink>
      </span>
    </td>
    <td
      :class="[
        'text-right pr-3 uppercase text-sm',
        { 'text-gray/20': !song_lyric.has_lyrics },
        { 'md:pr-6': display.padding },
      ]"
      :title="song_lyric.lang_string"
    >
      {{ song_lyric.lang != 'cs' ? song_lyric.lang.substring(0, 3) : '' }}
    </td>
    <td class="w-24" :class="{ 'md:pr-5': display.padding }" v-if="display.icons">
      <BasicClickable class="icons" :to="linkObject" tabindex="-1">
        <BasicIcon
          v-if="song_lyric.has_chords"
          name="fas fa-guitar"
          type="fa"
          class="text-blue"
          title="Tato píseň má přidané akordy."
        />
        <BasicIcon
          v-else-if="song_lyric.has_lyrics"
          name="subject"
          title="U této písně je zaznamenán text (bez akordů)."
        />
        <BasicIcon v-else name="subject" class="text-gray/20" />

        <BasicIcon
          v-if="song_lyric.scores?.length"
          name="audio_file"
          title="U této písně je k dispozici soubor s notami."
          class="text-red"
          fill
        />
        <BasicIcon v-else name="audio_file" class="text-gray/20" fill />

        <BasicIcon
          v-if="song_lyric.recordings?.length"
          name="headphones"
          title="U této písně je k dispozici nahrávka."
          class="text-green"
          fill
        />
        <BasicIcon v-else name="headphones" class="text-gray/20" fill />
      </BasicClickable>
    </td>
  </tr>
</template>

<script setup>
const config = useRuntimeConfig();
const props = defineProps({
  song_lyric: Object,
  songbookId: null,
  contextState: Object,
  active: Boolean,
  scrollIntoView: Boolean,
  display: {
    type: Object,
    default() {
      return {
        padding: false,
        number: false,
        authors: false, // or 'min' or true or 'max'
        icons: false,
      };
    },
  },
  forceNumber: Boolean,
});

const rowElement = useTemplateRef('row');

function activeIntoView() {
  if (props.scrollIntoView && props.active && !rowElement.value.contains(document.activeElement)) {
    rowElement.value.scrollIntoView();
  }
}

watch(
  () => props.active,
  async (val) => {
    await nextTick();
    activeIntoView();
  }
);

onMounted(() => {
  activeIntoView();
});

const linkObject = computed(() => ({
  path: props.song_lyric.public_route,
  state: props.contextState,
}));
const authorshipTypes = { GENERIC: '', LYRICS: 'text', MUSIC: 'hudba' };
const songbookPivot = computed(() => {
  if (props.songbookId != null && props.song_lyric.songbook_records != null) {
    const record = props.song_lyric.songbook_records.find(
      (r) => r.pivot.songbook.id == props.songbookId
    );

    if (record != null && record.pivot.number && record.pivot.songbook.shortcut) {
      return record.pivot;
    }
  }
});
const songbookPrefix = computed(() =>
  config.public.variation.songbook != props.songbookId && songbookPivot.value != null
    ? `${songbookPivot.value.songbook.shortcut} `
    : ''
);
const songNumber = computed(() =>
  songbookPivot.value != null ? songbookPivot.value.number : props.song_lyric.song_number
);
</script>

<script>
import gql from 'graphql-tag';
export const SongListItemFragment = gql`
  fragment SongListItemFragment on SongLyric {
    id
    name
    secondary_name_1
    secondary_name_2
    songbook_records {
      pivot {
        songbook {
          id
          shortcut
        }
        song_name
        number
      }
    }
    public_route
    type
    authors_pivot {
      pivot {
        author {
          name
          public_route
        }
        authorship_type
      }
    }
    has_lyrics
    has_chords
    lang
    lang_string
  }
`;
</script>

<style lang="postcss" scoped>
tr:hover,
tr:focus-within {
  @apply bg-surface-50;
}

tr:active,
tr.active {
  @apply bg-surface-200;
}

.icons {
  @apply flex;

  & > * {
    @apply mr-2;

    width: 25px;
    text-align: center;
  }
}
</style>
