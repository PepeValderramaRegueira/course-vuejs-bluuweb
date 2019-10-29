const app = new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasksList: []
  },
  methods: {
    addNewTask() {
      this.tasksList.push({
        content: this.newTask,
        done: false,
        index: this.tasksList.length
      })
      this.newTask = ''
      this.updateLocalStorage()
    },
    deleteTask(index) {
      this.tasksList.splice(index, 1)
      this.updateLocalStorage()
    },
    toggleDoneTask(task) {
      this.tasksList[task.index].done = !task.done
      this.updateLocalStorage()
    },
    updateLocalStorage(showAlert) {
      localStorage.setItem('vue-crud-storage', JSON.stringify(this.tasksList))

      // TODO: show a cool alert message
      // if (showAlert) alert('Task updated successfully!')
    }
  },
  created() {
    // Get local storage info
    let crudLocalStorage = localStorage.getItem('vue-crud-storage')

    // If local storage is distinct of null, save the data into the tasksList
    this.tasksList = crudLocalStorage ? JSON.parse(crudLocalStorage) : []
  }
})
