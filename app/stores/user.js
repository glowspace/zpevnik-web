import { isEqual } from 'lodash-es';
import { defineStore } from 'pinia'

const historyLimit = 4;

export default defineStore('user', {
  state: () => ({
    history: [],
  }),

  actions: {
    historyAdd(item) {
      if (isEqual(this.history[0], item)) {
        return;
      }

      var same = this.history.findIndex(x => isEqual(x, item));

      if (same > -1) {
        this.history.splice(same, 1);
      }

      this.history.unshift(item);

      if (this.history.length > historyLimit) {
        this.history.pop();
      }
    }
  },

  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
})
