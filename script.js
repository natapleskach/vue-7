const Counter = {
  data () {
    return {
      counter: 0,
      text: "Это провочный текст",
    }
  }
}

Vue.createApp(Counter).mount("#counter")


const NewText = {
  data () {
    return {
      message: "Я хочу изучать Реакт, а не Вью"
    }
  },
  methods: {
    reverse() {
      this.message = this.message
      .split("")
      .reverse()
      .join("")
    }
  }
}

Vue.createApp(NewText).mount('#event-reverse');

const Conditional = {
	data() {
		return {
			isSeen: false,
		}
	},
}

Vue.createApp(Conditional).mount('#conditional');


const list = {
  data() {
    return {
      todos: [
        {text: "Выучить"},
        {text: "Сделать дз"},
        {text: "Продолжить изучать"}
      ]
    }
  }
}

Vue.createApp(list).mount('#list')


const warchExample = Vue.createApp({
  data() {
    return {
      question: "",
      answer: "Вопросы обычно заканчиваются вопросительным знаком."
    }
  },
  watch: {
    question(newQuestion) {
      if (newQuestion.indexof("?") > -1) {
        this.getAnswer()
      }
    }
  },
  methods: {
    getAnswer() {
      this.answer = "Думаю"
      axios
				.get('https://jsonplaceholder.typicode.com/todos/1')
				.then(response => (this.answer = response.data.answer))
				.catch(error => {
					this.answer = 'Ошибка! Нет доступа к API. ' + error
				})
    }
  }
}).mount('#example')


const TodoItemNew = {
  props: ["Todo"],
  template: `<li>{{ todo.text }}</li>`
}

const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans to eat" }
      ]
    }
  },
  components: {
    TodoItemNew
  }
}

Vue.createApp(TodoList).mount('#todo-list-app')