Vue.component('child', {
  template: `
    <div class="child">
      <h3>Child component</h3>
      <p>Number in the child: {{$store.state.number}}</p>
      <button @click="$store.commit('increment')">+</button>
      <span>Number value: </span>
      <input v-model="$store.state.number">
    </div>
  `
})
