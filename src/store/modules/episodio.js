import serviceApi from "@/service/episodio"

export default {
    namspaced: true,
    state: {
        episodios: []

    },
    mutations: {
        SET_EPISODIOS(state, payload) {
            state.episodios = payload
        }
    },
    actions: {
        getEpisodios(context) {
            return serviceApi.getEpisodios().then(res => {
                context.commit('SET_EPISODIOS', res.data.results)
            })
        }

    },
    getters: {
        listEpisodios(state) {
            return state.episodios
        }

    },
}