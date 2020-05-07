<template>
  <div class="outer">
    <Header :selected="null" />
    <div class="mainDiv">
      <div class="imgDiv">
        <figure>
          <img
            :src="require('@/assets/' + imgSrc + '')"
            alt="img"
            width="100"
            height="100"
          /><br />
          <figcaption>{{ data.name }}</figcaption>
        </figure>
      </div>
      <div class="infoDiv" v-if="data.name == ProjectInfo.name">
        Package Name : {{ ProjectInfo.apps[0].packageName }}<br />
        Version Name : {{ ProjectInfo.apps[0].versionName }}<br />
        Version Code : {{ ProjectInfo.apps[0].versionCode }}<br />
      </div>
    </div>

    <div class="actions">
      <div>
        <figure>
          <img
            src="@/assets/manual.png"
            alt="img"
            width="70"
            height="70"
            @click="showModal = !showModal"
          />
          <figcaption>Manual</figcaption>
        </figure>
      </div>
      <div>
        <figure>
          <img
            src="@/assets/automate.jpg"
            width="70"
            height="70"
            @click="showModal = !showModal"
          />
          <figcaption>Automate</figcaption>
        </figure>
      </div>
      <div>
        <figure>
          <img
            src="@/assets/testcases.jpg"
            alt="img"
            width="70"
            height="70"
            @click="showModal = !showModal"
          />
          <figcaption>TestCases</figcaption>
        </figure>
      </div>
      <div>
        <figure>
          <img src="@/assets/test suit.png" alt="img" width="70" height="70" />
          <figcaption>TestCases</figcaption>
        </figure>
      </div>
      <div>
        <figure>
          <img src="@/assets/testrun.jpg" alt="img" width="70" height="70" />
          <figcaption>TestRun</figcaption>
        </figure>
      </div>
    </div>
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal">
        <div class="md-form mb-3 mx-5 mt-5">
          <input
            type="text"
            class="form-control"
            placeholder="Search device."
            name="search"
            v-model="device"
          />
        </div>
        <b-card-group columns style="max-width: 40rem;">
          <div v-for="to in deviceList.available" :key="to.name">
            <div v-if="to.name.toLowerCase().includes(device.toLowerCase())">
              <b-card
                header-bg-variant="primary"
                header-text-variant="white"
                class="text-center"
              >
                <b-card
                  img-src="https://www.laptopsdirect.co.uk/Images/A1MQAF2BA_1_Classic.png?v=3&width=370&height=370&switchoff=enabled"
                  height="5"
                  img-alt="Card image"
                  img-top
                >
                  <b-card-text>
                    {{ to.name }}
                  </b-card-text>
                  <b-button block variant="primary" @click="showModal = false"
                    >Select</b-button
                  >
                </b-card>
              </b-card>
            </div>
          </div>
          <div v-for="to in deviceList.offline" :key="to.name">
            <div v-if="to.name.toLowerCase().includes(device.toLowerCase())">
              <b-card
                header-bg-variant="primary"
                header-text-variant="white"
                class="text-center"
              >
                <b-card
                  img-src="https://www.laptopsdirect.co.uk/Images/A1MQAF2BA_1_Classic.png?v=3&width=370&height=370&switchoff=enabled"
                  height="5"
                  img-alt="Card image"
                  img-top
                >
                  <b-card-text>
                    {{ to.name }}
                  </b-card-text>
                  <b-button block @click="showModal = false">Offline</b-button>
                </b-card>
              </b-card>
            </div>
          </div>
          <div v-for="to in deviceList.busy" :key="to.name">
            <div v-if="to.name.toLowerCase().includes(device.toLowerCase())">
              <b-card
                header-bg-variant="primary"
                header-text-variant="white"
                class="text-center"
              >
                <b-card
                  img-src="https://www.laptopsdirect.co.uk/Images/A1MQAF2BA_1_Classic.png?v=3&width=370&height=370&switchoff=enabled"
                  height="5"
                  img-alt="Card image"
                  img-top
                >
                  <b-card-text>
                    {{ to.name }}
                  </b-card-text>
                  <b-button block @click="showModal = false">Busy</b-button>
                </b-card>
              </b-card>
            </div>
          </div>
          <div v-for="to in deviceList.reserved" :key="to.name">
            <div v-if="to.name.toLowerCase().includes(device.toLowerCase())">
              <b-card
                header-bg-variant="primary"
                header-text-variant="white"
                class="text-center"
              >
                <b-card
                  img-src="https://www.laptopsdirect.co.uk/Images/A1MQAF2BA_1_Classic.png?v=3&width=370&height=370&switchoff=enabled"
                  height="5"
                  img-alt="Card image"
                  img-top
                >
                  <b-card-text>
                    {{ to.name }}
                  </b-card-text>
                  <b-list-group flush>
                    <b-list-group-item>{{ to.resolution }}</b-list-group-item>
                  </b-list-group>
                  <b-button block @click="showModal = false">Reserved</b-button>
                </b-card>
              </b-card>
            </div>
          </div>
        </b-card-group>
      </div>
    </transition>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  data() {
    return {
      ProjectInfo: "",
      showModal: false,
      deviceList: "",
      device: ""
    };
  },
  props: {
    data: Object,
    imgSrc: String
  },
  components: {
    Header
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      fetch(
        "https://raw.githubusercontent.com/izinga/UI_DEMO/master/json/project_detail.json"
      )
        .then(response => response.json())
        .then(data => {
          this.ProjectInfo = data;
        });
      fetch(
        "https://raw.githubusercontent.com/izinga/UI_DEMO/master/json/device_list.json"
      )
        .then(response => response.json())
        .then(data => {
          this.deviceList = data;
        });
    }
  }
};
</script>
<style>
.mainDiv {
  background: #d3d3d3;
  position: absolute;
  display: flex;
  left: 25%;
  top: 16%;
  width: 50%;
  height: 50%;
  border-radius: 4px;
}
.imgDiv {
  display: flex;
  position: absolute;
  left: 10%;
  top: 10%;
}
.infoDiv {
  position: absolute;
  left: 40%;
  top: 10%;
  text-align: left;
  font-size: 15px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
#card-img-top {
  width: 15vw;
  height: 5vw;
}
.actions {
  display: flex;
  top: 70%;
  left: 35%;
  position: fixed;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}
.modal-overlay {
  position: absolute;
  top: 15%;
  z-index: 100;
  bottom: 10%;
  left: 10%;
  right: 20%;
  background: white;
  overflow: scroll;
  transition: opacity 0.3s ease;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-active {
  opacity: 0;
}
.fade-enter .fade-container,
.fade-leave-active .fade-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
@media screen and (max-width: 800px) {
  .actions {
    display: flex;
    flex-direction: column;
    top: 70%;
    left: 35%;
    position: absolute;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }
  .infoDiv {
    position: absolute;
    left: 8%;
    top: 60%;
    text-align: center;
    font-size: 13px;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  .imgDiv {
    display: flex;
    position: absolute;
    left: 20%;
    top: 10%;
  }
}
</style>
