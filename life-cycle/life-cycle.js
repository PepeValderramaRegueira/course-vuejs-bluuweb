const app = new Vue({
  el: '#app',

  beforeCreate() {
    console.log('Before create')
  },
  created() {
    console.log('Created')
  },
  beforeMount() {
    console.log('Before mount')
  },
  mounted() {
    console.log('Mounted')
  },
  beforeUpdate() {
    console.log('Before update')
  },
  updated() {
    console.log('Updated')
  },
  beforeDestroy() {
    console.log('Before destroy')
  },
  destroyed() {
    console.log('Destroyed')
  },

  data: {
    message: 'This is the initial message'
  }
})
