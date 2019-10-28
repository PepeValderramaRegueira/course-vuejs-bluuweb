const app = new Vue({
  el: '#app',
  data: {
    title: 'My profile',
    hobbies: [
      { name: 'Web design', hoursPerDay: 4, doingNow: true },
      { name: 'Nature', hoursPerDay: 2, doingNow: false },
      { name: 'Longboarding', hoursPerDay: 1, doingNow: false }
    ]
  }
})
