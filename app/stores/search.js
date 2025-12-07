import { defineStore } from 'pinia'

export default defineStore('search', {
  state: () => ({
    searchString: '',
    filters: emptyFilters(),
    sort: emptySort(),
    seed: randomInt(1, 100000),
  }),

  actions: {
    randomizeSeed() {
      this.seed = randomInt(1, 100000);
    },

    resetBasicSearch() {
      this.searchString = '';
      this.filters = emptyFilters();
      this.sort = emptySort();
    },
  }
})

export function emptyFilters() {
  return {
    tags: {},
    languages: {},
    songbooks: {},
  };
}

export function emptySort() {
  return {
    by: 0,
    desc: false,
  };
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
