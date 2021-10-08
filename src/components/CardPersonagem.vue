<template>
  <div>
    <b-row>
      <b-card
        v-for="personagem in listPersonagens"
        :key="personagem.index"
        :title="personagem.name"
        :img-src="personagem.image"
        img-alt="Imag"
        style="max-width: 20rem"
        class="card-style"
      >
        <b-card-text> </b-card-text>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Personagem",

  computed: {
    ...mapGetters(["listPersonagens"]),
  },
};
</script>

<style>
</style>