<template>
  <div class="episodios">
    <h1>Lista de episodios crua</h1>
    <span> {{ listEpisodios }}</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Episodio",
  created() {
    this.getEpisodios();
  },
  methods: {
    ...mapActions(["getEpisodios"]),
  },
  computed: {
    ...mapGetters(["listEpisodios"]),
  },
};
</script>
