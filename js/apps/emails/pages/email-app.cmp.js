import { emailService } from "../services/email.service.js"
import emailList from "../cmps/email-list.cmp.js"
import emailSide from "../cmps/email-side.cmp.js"

export default {
    template: `

        <section class="flex" >
            <email-side @sort="sortStateEmails" @send="sendEmail"/>
            <email-list @selected="showEmail" 
                @delete="deleteEmail" :emails="emailsToShow"
            />
        </section>
    `,
    data() {
        return {
            emails: null,
            sortState: 'all',
        }
    },
    methods: {
        showEmail(emailId) {
            this.$router.push(`/email/${emailId}`)
        },
        sendEmail(email) {
            emailService.save(email)
            .then(email => this.emails.push(email))
        },
        deleteEmail(emailId) {
            emailService.remove(emailId)
            const idx = this.emails.findIndex(email => email.id === emailId)
            this.emails.splice(idx, 1)
        },
        sortStateEmails(type) {
            this.sortState = type
        }
    },
    computed: {
        emailsToShow() {
            if (this.sortState === 'all') return this.emails
            if (this.sortState === 'unread') {
                return this.emails.filter(email => !email.isRead)
            }
            return this.emails.filter(email => email.state === this.sortState)
        },
    },
    created() {
        emailService.query()
            .then(emails => this.emails = emails)
    },
    unmounted() {
 
    },
    components: {
        emailList,
        emailSide,
    },
}