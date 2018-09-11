export default {
  setUIData (state, obj) {
    state.matrixY = obj.matrixY
    state.matrixX = obj.matrixX
  },

  setArticleSeen (state, seen) {
    state.articleSeen = seen
  },
}