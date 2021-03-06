import { toggleEmit } from '../../../services/eventBus.service.js'

export default {
  template: `

      <section class="app-header">
       
          <button href="#" @click="toggleSideNav">☰</button>
          <div class="logo">
              <img src="assets/img/logo-mail.png" alt="">
          </div>
          <h2>Mail</h2>
      
          <div class="search">
            <input class="input-search" type="text" v-model="filterBy.txt" @input="filter" placeholder="Search">
            <i class="icon fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-sliders" @click="showDropDown"></i>
            
            <div class="adv-filter" v-if="isDropDown">
                <div class="sort-date" @click="sort">
                  <span class="label">Date</span>
                  <i class="fa-solid fa-arrow-up-z-a" @click="sortDir"></i>
                </div>
                <div class="flex">
                  <span class="label">From</span>
                  <input type="search" v-model="filterBy.to" @input="filter">
                </div>
                <div class="flex">
                  <span class="label">Subject</span>
                  <input type="search" v-model="filterBy.subject" @input="filter">
                </div>
                <div class="flex"> 
                  <span class="label">Has the words</span>
                  <input type="search" v-model="filterBy.body" @input="filter">
                </div>
                <div class="flex">
                  <span class="label">Date within</span>
                  <input class="date-from" type="date" v-model="filterBy.dateFrom" @change="filter">
                  <input type="date" v-model="filterBy.dateTo" @change="filter">
                </div>
            </div>
          </div>
        </section>  
`,
  data() {
    return {
      filterBy: {
        txt: '',
        to: '',
        subject: '',
        body: '',
        dateFrom: '',
        dateTo: '',
      },
      sortBy: {
        date: null,
        direction: null,
      },
      isDropDown: false,
    }
  },
  created() {},
  methods: {
    filter() {
      this.$emit('search', this.filterBy)
    },
    sort() {
      this.sortBy.date = !this.sortBy.date
      this.$emit('sort', this.sortBy)
    },
    sortDir() {
      this.sortBy.direction = !this.sortBy.direction
      this.$emit('sort', this.sortBy)
    },
    showDropDown() {
      this.isDropDown = !this.isDropDown
    },
    toggleSideNav() {
      toggleEmit()
    },
  },
  computed: {},
  unmounted() {},
}
