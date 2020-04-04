import { mapActions, mapGetters, mapState} from 'vuex'

export default {
    name: 'Article',
    layout: 'default',
    async created () {
        await this.load()
    },
    data: () => ({
        passwordVisible: false,
        message: null,
        payload: {
            email: null,
            password: null
        },
        errors: {
            email: null,
            password: null
        }
    }),
    computed: {
        ...mapState({
            data: state => state.data
        })
    },
    methods: {
        ...mapActions(['load'])        
    }
}
