// tasklist.js

const app = new Vue({
    el: '#app',
    data: {
      newTask: '',
      tasks: [
        'Start learning vue.', 
        'Write a simple task app.', 
        'Write the facebook of tommorow, today.'
      ]
    }
  });