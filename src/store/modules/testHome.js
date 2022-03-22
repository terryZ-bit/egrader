const state = {
    count: 1
}

const mutations = {
    increment(state) {
        state.count++;
    },
}

const getters = {
    getCount: (state) => state.count
}

const actions = {
    saveCount: ({commit}, payload) => {
        commit('increment', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}