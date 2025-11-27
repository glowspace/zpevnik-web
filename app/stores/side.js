export function generateSideState(rawListData, index) {
  return {
    zpsSide: {
      list: rawListData,
      index,
    }
  };
}

export function getSideState(router) {
  return router.options.history.state.zpsSide;
}

function generateLinkObject(rawParams, songs, linkIndex) {
  if (linkIndex >= 0 && linkIndex < songs.length) {
    return {
      path: songs[linkIndex].public_route,
      state: generateSideState(rawParams, linkIndex),
    };
  }
}

export default defineStore('side', {
  state: () => ({
    // showSide: true,
    params: null,
    index: null,
    songs: [],
  }),
  getters: {
    previous: (state) => generateLinkObject(toRaw(state.params), state.songs, state.index - 1),
    next: (state) => generateLinkObject(toRaw(state.params), state.songs, state.index + 1),
  },
})
