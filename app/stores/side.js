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
    // show side panel?
    show: true,
    // params of current song list
    // loaded from history.state, updated when list loads
    params: null,
    // index of active song in the list
    index: null,
    // songs in current song list (used by previous/next buttons)
    songs: [],
  }),
  getters: {
    // previous/next button links
    previous: (state) => generateLinkObject(toRaw(state.params), state.songs, state.index - 1),
    next: (state) => generateLinkObject(toRaw(state.params), state.songs, state.index + 1),
  },
})
