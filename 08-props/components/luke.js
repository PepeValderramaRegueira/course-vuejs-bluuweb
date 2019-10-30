Vue.component('luke', {
  props: ['legacy'],

  mounted() {
    this.$emit('lukeAffect', this.affect)
  },
  
  template: `
    <div class="luke">
      <p>{{status}}</p>
      <p>I give your my {{checkAffect}}</p>
    </div>
  `,

  data() {
    return {
      affect: 'hate'
    }
  },

  computed: {
    status() {
      return this.legacy === 'evil' ? "Nooooooo! 😱 I don't want your evilness!" : "Yesss! I want your force 😊"
    },
    checkAffect() {
      return this.legacy === 'evil' ? 'hate 😠' : 'love ❤️'
    }
  },
})
