Vue.component('parent', {
  template: `
    <div class="parent">
      <h2>Parent component</h2>
      <p>Number in the parent: {{$store.state.number}}</p>
      <child></child>
    </div>
  `
})
