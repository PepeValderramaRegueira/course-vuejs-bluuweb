const app = new Vue({
  el: '#app',
  data: {
    style: 'bg-default',
    quantity: 0
  },
  computed: {
    quantityColor() {
      return {
        'bg-red' : this.quantity === 0,
        'bg-blue' : this.quantity > 0 && this.quantity <= 4,
        'bg-green' : this.quantity > 4
      }
    }
  }
})
