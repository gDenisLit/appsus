import addNoteTxt from './add-cmps/add-note-txt.cmp.js'
import addNoteImg from './add-cmps/add-note-img.cmp.js'
import addNoteVideo from './add-cmps/add-note-video.cmp.js'
import addNoteTodos from './add-cmps/add-note-todos.cmp.js'
import addNoteAudio from './add-cmps/add-note-audio.cmp.js'
import addNoteDraw from './add-cmps/add-note-draw.cmp.js'

export default {
  template: `
  <div class="add-wrapper">
      <section class="note-add-container">
        <div v-if="!type" class="note-add flex">
          <p @click="changeType('txt')">Take a note...</p>
        </div>

        <add-note-txt v-if="type === 'txt'" @added="type = null" />
        <add-note-img v-if="type === 'img'" @added="type = null" />
        <add-note-video v-if="type === 'video'" @added="type = null" />
        <add-note-todos v-if="type === 'todos'" @added="type = null" />
        <add-note-audio v-if="type === 'audio'" @added="type = null" />
        <add-note-draw v-if="type === 'draw'" @added="type = null" />

        <div class="note-type-picker">
            <a @click="changeType('txt')"><i class="fa-solid fa-font"></i></a>
            <a @click="changeType('img')"><i class="fa-solid fa-image"></i></a>
            <a @click="changeType('video')"><i class="fa-brands fa-youtube"></i></a>
            <a @click="changeType('todos')"><i class="fa-solid fa-list"></i></a>
            <a @click="changeType('audio')"><i class="fa-solid fa-volume-high"></i></a>
            <a @click="changeType('draw')"><i class="fa-solid fa-paintbrush"></i></a>
          </div>
      </section>
    </div>
    `,
  components: {
    addNoteTxt,
    addNoteImg,
    addNoteVideo,
    addNoteTodos,
    addNoteAudio,
    addNoteDraw,
  },
  data() {
    return {
      type: null,
    }
  },
  created() {},
  methods: {
    changeType(type) {
      this.type = type
    },
  },
  computed: {},
  unmounted() {},
}
