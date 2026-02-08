<template>
  <div v-if="topSongbooks && topSongbooks.length">
    <DashboardCard title="Zpěvníky" :more-link="{ name: 'songbooks' }">
      <BasicClickable
        v-for="songbook in topSongbooks"
        :key="songbook.id"
        :to="{ name: 'songbook', params: { id: songbook.id } }"
        class="card-item"
      >
        <span class="card-icon">
          <div class="w-5 h-5 rounded" :style="{ background: songbook.color }"></div>
        </span>
        <span>{{ songbook.name }}</span>
        <span class="card-note">{{ songbook.shortcut }}</span>
      </BasicClickable>
    </DashboardCard>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const FETCH_SONGBOOKS = gql`
  query {
    songbooks(is_private: false) {
      id
      name
      songs_count
      color
      shortcut
    }
  }
`;

export default {
  apollo: {
    songbooks: {
      query: FETCH_SONGBOOKS,
    },
  },

  computed: {
    topSongbooks() {
      if (this.songbooks) {
        return this.songbooks.filter((s) => s.songs_count > 100).slice(0, 5);
      }
    },
  },
};
</script>
