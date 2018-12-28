import api from '../../api/imgur'

const state = {
    token: null
}
const getters = {
    isloggedIn : state => !!state.token
}
const actions = {
    logout: ({ commit }) => {
        //commit is used to call a mutation
        commit('setToken', null)
    },
    login: () => {
        api.login()
    },
    

}
const mutations = {
    setToken : (state, token) => {
        state.token = token
    }

}

export default {
    state, getters, actions, mutations
}
