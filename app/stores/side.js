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

export default defineStore('side', {
  state: () => ({
    // showSide: true,
    list: null,
    index: null,
  }),
})
