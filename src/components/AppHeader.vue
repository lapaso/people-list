<template>
  <div class="header">
    <div class="headerName">
      <Logo></Logo>
      <div class="headerText">forbes 400</div>
    </div>
    <div class="nav">
      <div class="navLink">
        <router-link class="withoutLink" to="/">home</router-link>
      </div>
      <div class="navLink">
        <router-link class="withoutLink" to="/createEmail">crete email</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./../components/Logo";

export default {
  components: { Logo },
  name: "AppHeader",
};
</script>

<style scoped>
.headerText {
  font-size: 30px;
  margin-left: 10px;
}
.header {
  background: rgb(184, 182, 182);
  display: flex;
  flex-direction: row;
  line-height: 56px;
}
.headerName {
  display: flex;
  flex: auto;
}
.nav {
  width: 300px;
  display: flex;
}
.navLink {
  width: 100px;
  border-radius: 25px;
  background: whitesmoke;
  border: 3px solid grey;
  margin-left: 10px;
  line-height: 48px;
}
.withoutLink {
  text-decoration: none;
  color: black;
}
</style>