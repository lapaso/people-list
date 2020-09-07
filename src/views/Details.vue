<template>
  <div v-if="person" class="detailContentWrapper">
    <div>
      <img :src="person.squareImage" />
    </div>
    <div class="detailInfo flexWrapper columnDirection">
      <LabelValue label="name:">{{person.personName}}</LabelValue>
      <LabelValue label="rank:">{{person.rank}}</LabelValue>
      <LabelValue label="source:">{{person.source}}</LabelValue>
      <LabelValue label="email:">{{person.email}}</LabelValue>
      <hr size="4" />
      <ul class="summary">
        <li v-for="bio in person.bios" :key="bio">{{bio}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import LabelValue from "./../components/LabelValue";

export default {
  name: "Details",
  components: {
    LabelValue,
  },
  computed: {
    person: function () {
      return this.$store.getters["personById"](this.$route.params.peopleId);
    },
  },
};
</script>

<style>
.detailContentWrapper {
  flex-direction: row;
  display: flex;
  padding: 10px;
}

.detailInfo {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}

.summary li {
  text-align: left;
  margin: 10px 0;
}

hr {
  height: 2px;
  border: none;
  color: #333;
  background-color: #333;
}
</style>