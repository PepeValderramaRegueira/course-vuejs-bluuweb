Vue.component('child', {
  template: `
    <div class="child">
      <h3>Child component</h3>
      <p>Number in the child: {{number}}</p>
      <button @click="increment">+</button>
      <button @click="decrement(10)">-</button>
      <span>Number value: </span>
      <input v-model="$store.state.number">
    </div>
  `,
  
  computed: {
    ...Vuex.mapState(['number'])
  },

  methods: {
    ...Vuex.mapMutations(['increment', 'decrement'])
  }
})
