<template>
  <div class="flexWrapper columnDirection">
    <div class="flexWrapper columnDirection">
      <div class="flexWrapper columnDirection">
        <div class="sectionTitle">selected people</div>
        <ul class="flexWrapper columnDirection">
          <li v-for="person in selectedPeoples" :key="person.uri">{{person.personName}}</li>
        </ul>
      </div>

      <hr />

      <div class="messageWrapper">
        <div class="sectionTitle">Message</div>
        <div class="message">{{emailMessage}}</div>
      </div>
    </div>

    <div class="buttonsWrapper">
      <button @click="onBackClick">back</button>
      <button @click="onSendClick">send</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EnterMessage",
  computed: {
    ...mapGetters(["emailMessage"]),
    ...mapGetters({ selectedPeoples: "getSelectedPeople" }),
  },
  methods: {
    onBackClick: function () {
      this.$router.push("/enterMessage");
    },
    onSendClick: function () {
      this.$store.dispatch("sendMessage").then(() => {
        alert("message send succesed");
        this.$router.push("/");
      });
    },
  },
};
</script>

<style scoped>
ul {
  line-height: 20px;
  text-align: left;
  padding: 5px 15px 15px 50px;
  list-style-type: disc;
}

.sectionTitle {
  line-height: 40px;
  font-size: 26px;
}
.messageWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.message {
  text-align: left;
  height: 126px;
  width: 700px;
}
</style>