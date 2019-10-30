import ProgressBar from './ProgressBar.mjs'

const app = new Vue({
  el: '#app',
  data: {
    progressBars: Array(5).fill(null).map(arrayEl => new ProgressBar(Math.floor(Math.random() * 100)))
  },
  computed: {
    progressBarStatus() {
      // AWESOME!!!! Returning a function, I can call this returned function in the
      // HTML passing the progressBar that I need to calculate the progress-bar class.
      // Doing this, each progressBar has her own progress status class.
      return function(progressBar) {
        return {
          'progress-low' : progressBar.progress <= 25,
          'progress-medium' : progressBar.progress > 25 && progressBar.progress <= 75,
          'progress-high' : progressBar.progress > 75
        }
      }
    }
  }
})
