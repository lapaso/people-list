<template>
  <div class="flexWrapper columnDirection">
    <div class="flexWrapper columnDirection height400">
      <div class="flexWrapper columnDirection">
        <div class="sectionTitle">selected people</div>
        <ul class="flexWrapper columnDirection">
          <li v-for="person in selectedPeoples" :key="person.uri">{{person.personName}}</li>
        </ul>
      </div>

      <hr />

      <div class="messageWrapper">
        <div class="sectionTitle">Message</div>
        <div>
          <textarea v-model="message" v-bind:maxlength="messageMaxLength" />
          <div>{{symbolCountText}}</div>
        </div>
      </div>
    </div>

    <div class="buttonsWrapper">
      <button @click="onBackClick">back</button>
      <button @click="onNextClick">next</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { MESSAGE_MAX_LENGTH } from "./../config";

export default {
  name: "EnterMessage",
  components: {},
  data: function () {
    return { messageMaxLength: MESSAGE_MAX_LENGTH };
  },
  methods: {
    onBackClick: function () {
      this.$router.push("/createEmail");
    },
    onNextClick: function () {
      this.$router.push("/confirmEmail");
    },
  },
  computed: {
    ...mapGetters(["emailMessage"]),
    ...mapGetters({ selectedPeoples: "getSelectedPeople" }),
    message: {
      get: function () {
        return this.emailMessage;
      },
      set: function (newValue) {
        this.$store.commit("setEmailMessage", newValue);
      },
    },
    symbolCountText:function(){
      return `${this.message.length} of ${this.messageMaxLength}`
    }
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
textarea {
  resize: none;

  height: 120px;
  width: 70%;
}

.height400{
  min-height: 400px;
}
</style>