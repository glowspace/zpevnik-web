import { defineStore } from 'pinia'

export default defineStore('chordShared', {
  state: () => ({
    transposition: 0,
    showChords: true,
    simpleView: false,
    accidentals: 'auto',
    fontSizePercent: 100,
    noSleep: null
  }),
  persist: {
    storage: piniaPluginPersistedstate.cookies(),
    pick: ['showChords', 'simpleView', 'accidentals', 'fontSizePercent'],
  },
  getters: {
    useFlatScale: (state) => state.accidentals == 'flat',
  },
})
