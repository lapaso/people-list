<template>
  <div class="flexWrapper columnDirection">
    <div class="flexWrapper columnDirection">
      <Grid :headers="headers" :items="peopleList">
        <template v-slot:avatar="{ item }">
          <CircleCheckbox
            :checked="selectedPeopleIds.indexOf(item.uri)!==-1"
            @change="onSelectedPerson(item)"
          ></CircleCheckbox>
        </template>
        <template v-slot:personName="{ item }">
          <router-link :to="{ name: 'details', params: { peopleId: item.uri }}">{{item.personName}}</router-link>
        </template>
        <template v-slot:finalWorth="{ item }">{{ item.finalWorth | formatWorth}}</template>
      </Grid>
    </div>
    <div class="buttonsWrapper">
      <button @click="onNextClick">next</button>
    </div>
  </div>
</template>

<script>
import Grid from "./../components/Grid";
import CircleCheckbox from "./../components/CircleCheckbox";
import peopleGridModel from "./../models/peopleGridModel";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Grid,
    CircleCheckbox,
  },
  data: function () {
    return {
      headers: peopleGridModel,
    };
  },
  methods: {
    onSelectedPerson: function (person) {
      this.$store.commit("toggleSelectPeopleById", person.uri);
    },
    onNextClick: function () {
      this.$router.push("/enterMessage");
    },
  },
  computed: {
    ...mapGetters(["peopleList", "selectedPeopleIds"]),
  },
};
</script>

<style>
.buttonsWrapper {
  flex: 0 0 auto;
  height: 40px;
  margin-left: auto;
}

.buttonsWrapper button {
  margin: 4px 25px;
  height: 32px;
  width: 150px;
  background: #dee0de;
  border: 3px solid grey;
  border-radius: 14px;
}

@media (max-width: 1000px) {
  .buttonsWrapper button {
    margin: 4px 15px;
    width: 65px;
  }
}
</style>