export default {
  name: 'Result',
  data() {
    return {
      result: this.$store.state,
    }
  },
  computed: {
    results: function () {
      return this.$store.state;
    },
    classObject: function () {
      return  {
        found: this.result.found === 1,
        alert: this.result.found === 2,
        error: this.result.errorConnect ||
               this.result.validForm.patient === false ||
               this.result.validForm.number === false,
      }
    }
  },
}