Vue.component('luke', {
  props: ['legacy'],

  template: `
    <div class="luke">
      <p>{{status}}</p>
    </div>
  `,

  computed: {
    status() {
      return this.legacy === 'evil' ? "Nooooooo! 😱 I don't want your evilness!" : "Yesss! I want your force 😊"
    }
  }
})
