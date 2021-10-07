import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import personagem from "./modules/personagem"
import local from "./modules/local"
import episodio from "./modules/episodio"

export default new Vuex.Store({
  modules: {
    personagem,
    local,
    episodio
  }
})
