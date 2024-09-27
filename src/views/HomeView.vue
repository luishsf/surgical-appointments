<template>
  <!-- <hello-world /> -->
  <surgical-list />
</template>

<script lang="ts">
import Vue from "vue";
import SurgicalList from "../components/SurgicalList.vue";

export default Vue.extend({
  name: "HomeView",

  components: {
    SurgicalList
  },
});
</script>
