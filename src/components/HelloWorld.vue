<template>
    <div id="app">
  <!-- input (model v-bind)-->
  <input v-model = "inputText" type="text">
  <!-- warning message (vue-if) -->
  <div v-if = "false"> You exseted 50 characters </div>
  <!-- Submit button (v-bind)-->
  <button class="test">Submit</button>
  </div>
</template>

<script src="./HelloWorld.js"></script>
<style src="./HelloWorld.css" scoped></style>
