<template>
  <div id="app" class="flexWrapper columnDirection">
    <AppHeader />
    <div class="content flexWrapper columnDirection">
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  beforeCreate: function () {
    this.$store.dispatch("loadForbes400");
    this.$store.dispatch("loadSelectedPeopleIds");
  },
};
</script>

<style>
#app {
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 550px;
  width: 1000px;
}
.content {
  padding: 10px;
}

.flexWrapper {
  overflow: auto;
  flex: auto;
  display: flex;
  height: 100%;
}

.columnDirection {
  flex-direction: column;
}

@media (max-width: 1000px) {
  #app {
    width: 100%;
  }
}
@media (max-height:550px) {
  #app {
    min-height: 100%;
  }
}
</style>
