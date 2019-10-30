Vue.component('vader', {
  template: `
    <div class="vader" :class="status">
      <p>I am your father. I give you my {{vaderLegacy}}.</p>
      <button class="goToTheLightSide-button" @click="goToTheLightSide()">Send Vader to the light side</button>
      <luke :legacy="vaderLegacy"></luke>
    </div>
  `,

  data() {
    return {
      vaderLegacy: 'evil'
    }
  },

  computed: {
    status() {
      return this.vaderLegacy === 'evil' ? '' : 'vader-good'
    }
  },

  methods: {
    goToTheLightSide() {
      this.vaderLegacy = 'force'
    }
  }
})
