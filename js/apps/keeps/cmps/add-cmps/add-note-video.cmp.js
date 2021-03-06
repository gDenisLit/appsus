import { addEmit } from '../../../../services/eventBus.service.js'
import { showErrorMsg } from '../../../../services/eventBus.service.js'

export default {
  template: ` 
    <section class="note-add-inner note-add-video flex" @keyup.enter="addNote">
      <input type="text"
        v-model="note.info.title"
        placeholder="Pick a title first">
      <input v-model="url" type="url" placeholder="Enter video url from YouTube...">
    </section>
`,
  data() {
    return {
      note: {
        type: 'note-video',
        info: {
          videoId: '',
          title: '',
        },
      },
      url: '',
    }
  },
  created() {},
  methods: {
    addNote() {
      // const newNote = JSON.parse(JSON.stringify(this.note))
      const videoId = this.extractId(this.url)
      if (!videoId) {
        showErrorMsg("Couldn't load video, check your link")
        return
      }

      this.note.info.videoId = videoId
      addEmit(this.note)
      this.$emit('added')
    },
    extractId(url) {
      const regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
      const match = url.match(regExp)

      return match && match[7].length == 11 ? match[7] : null
    },
  },
}
