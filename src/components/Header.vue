<template>
  <nav class="navbar navbar-inverse bg-dark text-white">
    <div class="container-fluid">
      <div class="navbar-header ">
        <img src="@/assets/robusTest.png" width="25px" />
        <span id="text">RobusTest</span>
      </div>
      <div class="nav navbar-nav navbar-right">
        <div v-if="selected != null">
          <img src="@/assets/download (1).png" width="25px" />
        </div>
        <div><i class="fas fa-bars"></i></div>
      </div>
    </div>
  </nav>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "Header",
  props: {
    selected: String
  }
});
</script>
