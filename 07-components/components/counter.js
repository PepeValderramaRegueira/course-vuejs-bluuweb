Vue.component('counter', {
  template: `
    <div>
      <h2>Counter</h2>
      <p>{{number}}</p>
      <button @click="number++">+</button>
    </div>
  `,

  data() {
    return {
      number: 0
    }
  }
})
