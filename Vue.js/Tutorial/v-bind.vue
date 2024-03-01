<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<!--template>
    <h1>Make me red</h1>
</template-->

<!--  adicionei um vinculo de class dinamico ao h1 -->

<template>
  <h1 :class="titleClass">Make me red</h1>
</template>

<style>
.title {
  color: red;
}
</style>