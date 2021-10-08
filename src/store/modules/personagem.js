import serviceApi from "../../service/personagem";

export default {
    namespaced: true,
    state: {
        personagens: [],
        personagemDetalhes: []
    },
    mutations: {
        SET_PERSONAGENS(state, payload) {
            state.personagens = payload;
        },
        SET_DETALHES_PERSONAGEM(state, payload) {
            state.personagemDetalhes = payload
        }
    },
    actions: {
        getPersonagens(context) {
            return serviceApi.getPersonagens().then(res => {
                context.commit("SET_PERSONAGENS", res.data.results);
            });
        },
        getPersonagemById(contex, id) {
            return serviceApi.getPersonagemById(id).then(res => {
                contex.commit('SET_DETALHES_PERSONAGEM', res.data)
            })
        }
    },
    getters: {
        listPersonagens(state) {
            return state.personagens;
        },
        listDetalhesPersonagem(state) {
            return state.personagemDetalhes
        }
    },
};
