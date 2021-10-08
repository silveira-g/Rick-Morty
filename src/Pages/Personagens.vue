<template>
  <div class="home">
    <h1>Lista de Personagens crua</h1>
    <CardPersonagem />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardPersonagem from "../components/CardPersonagem.vue";

export default {
  components: { CardPersonagem },
  name: "Personagens",
  created() {
    this.getPersonagens();
  },
  methods: {
    ...mapActions("personagem", ["getPersonagens"]),
  },
  computed: {
    ...mapGetters("personagem", ["listPersonagens"]),
  },
};
</script>
