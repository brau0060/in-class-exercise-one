<template>

<div class="hello">
  <div class="input-wrapper">
    <!-- input (v-model v-bind)-->
    <input name="inputName" type="text" v-model="inputText" v-bind:class="checkInput">
    <!-- warning message (vue-if v-bind) -->
    <div v-if="checkValue"  v-bind:class="checkCharacter"> You exseted 50 characters </div>
  </div>
  <div class="button-warpper">
    <!-- Submit button (v-bind)-->
   <button  v-bind:disabled="isdisables"> Submit</button>
  </div>
</div>
</template>

<script src="./HelloWorld.js"></script>
<style src="./HelloWorld.css" scoped></style>
