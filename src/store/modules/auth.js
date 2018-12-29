import api from '../../api/imgur'
import qs from 'qs'
import { router } from '../../main'

const state = {
    token: window.localStorage.getItem('imgur_token')
}
const getters = {
    isloggedIn : state => !!state.token
}
const actions = {
    logout: ({ commit }) => {
        //commit is used to call a mutation
        commit('setToken', null)
        window.localStorage.removeItem('imgur_token')
    },
    login: () => {
        api.login()
    },
    finalizeLogin: ({ commit }, hash) => {
       const queryString = qs.parse(hash.replace('#', '')) 
       commit('setToken', queryString.access_token)
       window.localStorage.setItem('imgur_token', queryString.access_token)
       router.push('/')

    }
}
const mutations = {
    setToken : (state, token) => {
        state.token = token
    }
}

export default {
    state, getters, actions, mutations
}
