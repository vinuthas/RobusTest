<template>
  <div id="op">
    <router-link :to="{ name: 'Project', params: { data, imgSrc } }">
      <img
        :src="require('@/assets/' + imgSrc + '')"
        alt="img"
        width="100"
        height="100"
    /></router-link>
    <strong class="text">{{ data.name }}</strong>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Project",
  props: {
    data: Object,
    imgSrc: String
  }
});
</script>
<style>
#op {
  margin: auto;
  vertical-align: top;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 20%;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: auto;
  margin: 10px;
  padding: 20px;
  transition: 0.3s;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
  justify-content: space-between;
}
.text {
  font-size: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
@media screen and (max-width: 800px) {
  #op {
    display: flex;
    min-width: 100%;
    flex-wrap: wrap;
    text-align: center;
    flex: 1 1 50%;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 20px;
    justify-content: space-between;
  }
  img {
    width: "60";
    height: "60";
  }
  .text {
    font-size: 30px;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
}
</style>
