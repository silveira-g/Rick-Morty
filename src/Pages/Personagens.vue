<template>
  <div class="home">
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
    ...mapActions(["getPersonagens"]),
  },
  computed: {
    ...mapGetters(["listPersonagens"]),
  },
};
</script>
