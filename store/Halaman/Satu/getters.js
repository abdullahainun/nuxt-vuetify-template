export default {
    getById: state => (id) => {
        return state.data.find(item => item.id === id)
    }
}