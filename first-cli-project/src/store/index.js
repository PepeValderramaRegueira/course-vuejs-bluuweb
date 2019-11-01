import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: [
      { id: 1, name: 'Pac-man', likes: 0 },
      { id: 2, name: 'Tetris', likes: 0 },
      { id: 3, name: 'Mario Bros', likes: 0 },
      { id: 4, name: 'Space invaders', likes: 0 },
      { id: 5, name: 'Pong', likes: 0 },
      { id: 6, name: 'Street fighter', likes: 0 },
    ]
  },
  mutations: {
    incrementLikes(state, index) {
      state.games[index].likes++
    },
    resetLikes(state) {
      state.games.forEach(game => game.likes = 0)
    }
  },
  actions: {
  },
  modules: {
  }
})
