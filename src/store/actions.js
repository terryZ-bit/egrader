export const savePathLater = ({commit}, payload) => {
    setTimeout(() =>{
        commit('savePath', payload)
    }, 2000)
}