import { mapState, mapActions } from 'vuex'

export default {
    name: 'HalamanSatu',
    head () {
        return {
            title: 'Halaman - Satu'
        }
    },
    async created () {
        await this.load()
    },
    data () {
        return {            
            message: {
                display: false,
                error: false,
                text: ''
            }
        }
    },
    computed: {
        ...mapState({
            data: state => state.Halaman.Satu.data
        })
    },
    methods: {
        ...mapActions('Halaman/Satu', ['load', 'hapus']),
        async hapusData (id) {
            const response = await this.hapus(id)

            if (response.success) {
                this.message = {
                    ...this.message,
                    display: true,
                    error: false,
                    text: response.message
                }
            } else {
                this.message = {
                    ...this.message,
                    display: true,
                    error: true,
                    text: response.message
                }
            }
        }
    }
}
