<template>
  <div class="flexWrapper columnDirection">
    <Grid :headers="headers" :items="peopleList">
      <template v-slot:avatar="{ item }">
        <img class="avatar" :src="item.squareImage" />
      </template>
      <template v-slot:personName="{ item }">
        <router-link :to="{ name: 'details', params: { peopleId: item.uri }}">{{item.personName}}</router-link>
      </template>
      <template v-slot:finalWorth="{ item }">{{ item.finalWorth | formatWorth}}</template>
    </Grid>
  </div>
</template>

<script>
import Grid from "./../components/Grid";
import peopleGridModel from "./../models/peopleGridModel";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Grid,
  },
  data: function () {
    return {
      headers: peopleGridModel,
    };
  },
  computed: {
    ...mapGetters(["peopleList"]),
  },
};
</script>

<style>
.avatar {
  height: 100px;
  width: 100px;
}
</style>