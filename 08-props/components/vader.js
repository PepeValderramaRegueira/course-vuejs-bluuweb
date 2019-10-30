Vue.component('vader', {
  template: `
    <div class="vader" :class="status">
      <p>I am your father. I give you my {{vaderLegacy}}.</p>
      <button v-if="vaderLegacy === 'evil'" class="goToTheLightSide-button" @click="goToTheLightSide()">Send Vader to the light side</button>
      <luke :legacy="vaderLegacy" @lukeAffect="lukeAffect = $event"></luke>
      <p>When I told you I was your father, you gave me your {{lukeAffect}}.</p>
    </div>
  `,

  data() {
    return {
      vaderLegacy: 'evil',
      lukeAffect: ''
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
