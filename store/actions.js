export default {
    async load ({ state, commit }) {
        if (state.data.length === 0) {
            try {
                const { data } = await this.$axios.$get('city')
                commit('LOAD', data)
            } catch (e) {
                console.log(e)
            }
        }
    }
}
