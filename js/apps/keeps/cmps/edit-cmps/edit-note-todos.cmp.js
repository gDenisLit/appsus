import { updateEmit } from '../../../../services/eventBus.service.js'

export default {
  props: ['note'],
  template: `
      <section class="note-edit-inner edit-note-img flex">
          <input v-model="note.info.title" type="text" placeholder="Title" @change="updateNote">
          <div v-for="(todo, idx) in note.info.todos" class="flex space-between" :key="todo.id"> 
              <div> <label v-if="todo.txt" class="cl-checkbox">
                    <input checked="" type="checkbox"  v-model="todo.isDone" @change="updateNote">
                    <span></span>
                </label>
                <input 
                  type="text" 
                  v-model="todo.txt"
                  @change="updateNote">
              </div>
              <span v-if="todo.txt" @click="removeTodo(idx)">x</span>
          </div>
          <input v-model="txtInput" type="text" placeholder="what to do.." @keyup.enter="addTodo">
      </section>

  `,
  data() {
    return {
      txtInput: '',
      id: 301,
    }
  },
  created() {},
  methods: {
    updateNote() {
      const newNote = this.clone()
      updateEmit(newNote)
    },
    addListItem() {
      this.todos.push({ id: this.id++, txt: '', isDone: false, doneAt: null })
    },
    addTodo() {
      const newNote = this.clone()
      const todo = {
        id: this.id++,
        isDone: false,
        txt: this.txtInput,
        doneAt: null,
      }

      newNote.info.todos.push(todo)

      updateEmit(newNote)

      this.txtInput = ''
    },
    removeTodo(idx) {
      const newNote = this.clone()
      newNote.info.todos.splice(idx, 1)
      updateEmit(newNote)
    },
    clone() {
      return JSON.parse(JSON.stringify(this.note))
    },
  },
}
