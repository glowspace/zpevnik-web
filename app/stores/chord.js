import { defineStore } from 'pinia'

export default defineStore('chordShared', {
  state: () => ({
    transposition: 0,
    showChords: true,
    simpleView: false,
    accidentals: 'auto',
    notesForPrediction: null,
    fontSizePercent: 100,
    noSleep: null
  }),
  persist: {
    storage: piniaPluginPersistedstate.cookies(),
    pick: ['showChords', 'simpleView', 'accidentals', 'fontSizePercent'],
  },
  getters: {
    useFlatScale: (state) => {
      if (state.accidentals != 'auto') {
        return state.accidentals == 'flat';
      }

      if (!state.notesForPrediction) {
        return false;
      }

      const transposed = state.notesForPrediction.map(x => (x + state.transposition + 12) % 12);

      // contains Bb or F -> likely is flat
      if (transposed.includes(10) || transposed.includes(5)) {
        return true;
      }

      return false;
    },
  },
})
