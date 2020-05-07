<template>
  <div>
    <Header :selected="null" />
    <div class="md-form mb-3 mx-5 mt-5">
      <input
        type="text"
        class="form-control"
        placeholder="Search.."
        name="search"
        v-model="searchItem"
      />
    </div>
    <div v-if="loading">
      Loading...
    </div>
    <div class="home" v-else>
      <Project
        v-for="to in filteredData()"
        :key="to.id"
        :data="to"
        :imgSrc="imageList[to.id]"
      />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import List from "@/data/Project_List.js";
import Project from "@/components/Project.vue";
import Header from "@/components/Header.vue";
import imgList from "@/data/imageList.js";
export default {
  data() {
    return {
      projectList: null,
      searchItem: "",
      temporarylisting: null,
      projectSelected: null,
      imageList: null,
      loading: true
    };
  },
  components: {
    Project,
    Header
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      List.then(data => {
        this.projectList = data;
        this.imageList = imgList;
        this.loading = false;
      });
    },
    filteredData() {
      this.temporarylisting = Object.values(this.projectList).filter(ele =>
        ele.name.toLowerCase().includes(this.searchItem.toLowerCase())
      );
      return this.temporarylisting;
    }
  }
};
</script>
<style>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 800px) {
  .home {
    min-width: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .text {
    font-size: 40px;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
}
</style>
