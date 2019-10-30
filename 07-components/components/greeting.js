Vue.component('greeting', {
  template: `
    <div>
      <h1>{{greeting}}</h1>
    </div>
  `,

  // When using components, the data is now a function
  // that returns an object.
  data() {
    return {
      greeting: 'Hello! I am your first Vue.js component'
    }
  }
})
