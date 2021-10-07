import serviceApi from "@/service/local"

export default {
    namspaced: true,
    state: {
        locais: []

    },
    mutations: {
        SET_LOCAIS(state, payload) {
            state.locais = payload
        }
    },
    actions: {
        getLocais(context) {
            return serviceApi.getLocais().then(res => {
                context.commit('SET_LOCAIS', res.data.results)
            })
        }

    },
    getters: {
        listLocais(state) {
            return state.locais
        }

    },




}