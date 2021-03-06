Vue.component('parent', {
  template: `
    <div class="parent">
      <h2>Parent component</h2>
      <p>Number in the parent: {{number}}</p>
      <child></child>
    </div>
  `,
  
  computed: {
    number() {
      return store.state.number
    }
  }
})
