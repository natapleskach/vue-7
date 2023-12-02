const TodoItemNew = {
  props: ["Todo"],
  template: `<li>{{ todo }}</li>`
}

const watchExample = Vue.createApp({
	data() {
		return {
			watchInput: '',
			groceryList: [
				'Vegetables',
				'Cheese' ,
				'Whatever else humans are supposed to eat'
			]
		}
	},
	watch: {
    watchInput(inputValue) {
      if (inputValue.indexOf(".") > -1) {
        this.addTodo(inputValue)
      }   
     }
  },
  methods: {
    getAnswer() {
      axios 
      .get("https://jsonplaceholder.typicode.com/todos/4")
      .then(response => console.log(response.data))
      .catch(error => error)
    },
    addTodo(value) {
      this.groceryList.push(value)
    },

    deleteItem() {
      this.groceryList.splice(this.groceryList.length - 1 , 1);
    },
    sortList() {
      this.groceryList.sort();
    }
  },
  components: {
    TodoItemNewTest
  }
}).mount("#example")