<template>
  <div class="home">
    <h1>Lista de Personagens crua</h1>
    <span>{{ listPersonagens }}</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
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
