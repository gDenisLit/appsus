import { addEmit } from '../../../../services/eventBus.service.js'

export default {
  template: ` 
    <section class="note-add-inner note-add-txt flex" @keyup.enter="addNote">
        <input v-model="note.info.title" type="text" placeholder="Title">
        <input v-model="note.info.txt" type="text" placeholder="Take a note...">
    </section>
`,
  data() {
    return {
      note: {
        type: 'note-txt',
        info: {
          title: '',
          txt: '',
        },
      },
    }
  },
  created() {},
  methods: {
    addNote() {
      addEmit(this.note)
      this.$emit('added')
    },
  },
}
