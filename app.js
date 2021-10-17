const app = Vue.createApp({
  data() {
    return {
      outputOne: "",
      outputTwo: "",
      confirmedInput: "",
    };
  },
  methods: {
    setOutputOne(event) {
      this.outputOne = event.target.value;
    },
    setOutputTwo(event) {
      this.outputTwo = event.target.value;
    },
    confirmedOutput() {
      this.confirmedInput = this.outputTwo;
    },
    showAlert() {
      alert("You have been alerted!");
    },
  },
});

app.mount("#assignment");
