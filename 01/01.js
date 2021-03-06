const app = new Vue({
  el: '#app',
  data: {
    title: 'My profile',
    hobbies: [
      { name: 'Web design', hoursPerDay: 4, doingNow: true },
      { name: 'Nature', hoursPerDay: 2, doingNow: false },
      { name: 'Longboarding', hoursPerDay: 1, doingNow: false }
    ],
    newHobbie: {
      name: '',
      hoursPerDay: '',
      doingNow: false
    },
    totalHoursPerDay: 0
  },
  methods: {
    // Add a new hobbie to the hobbies list.
    addNewHobbie (e) {
      this.hobbies.push({
        name: this.newHobbie.name,
        hoursPerDay: this.newHobbie.hoursPerDay,
        doingNow: this.newHobbie.doingNow
      })

      // Reset the new hobbie form
      this.newHobbie.name = ''
      this.newHobbie.hoursPerDay = ''
    }
  },
  computed: {
    sumHoursPerDay() {
      return this.hobbies.reduce((value, current) => current.hoursPerDay + value, 0)
    }
  }
})
