export default {
name: 'HelloWorld',

computed: {
  checkValue() {
    return this.inputText.length > 50;
  },
  checkInput() {
    return this.inputText.length > 50 ? 'input-warn' : '';
  },
  checkCharacter() {
    return this.inputText.length > 50 ? 'warn' : '';
  },
  isdisables() {
    return this.inputText.length > 50 || this.inputText.length == 0 ;
  }
},
  data() {
    return {
    inputText: ""
    }
  }
}
