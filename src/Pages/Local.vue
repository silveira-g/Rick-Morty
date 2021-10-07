<template>
  <div class="locais">
    <h1>Lista de locais crua</h1>
    <span> {{ listLocais }}</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Local",
  created() {
    this.getLocais();
  },
  methods: {
    ...mapActions(["getLocais"]),
  },
  computed: {
    ...mapGetters(["listLocais"]),
  },
};
</script>
