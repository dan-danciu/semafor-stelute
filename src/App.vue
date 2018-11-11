<template>
  <div id="app">
    <div class="label" v-if="!running">
      <br><br>
      <h2>Durata semafor (secunde):</h2>
      <div class="container" @click="time--">
        &#9664;
      </div> <input v-model="time">
      <div class="container" @click="time++">
        &#9654;
      </div>
      <br><br><br><br>
      <input type="checkbox" id ="checkbox" v-model="useyellow">
      <label for="checkbox" :style="{fontSize: '20px'}">Include galben</label>
      <br><br><br><br><br>
    </div>


    <div class="start" @click="lightUp" v-if="!running">
      Start
    </div>
    <div class="card" v-if="!running">
      Apasati "Start" in acelasi timp pe doua telefoane diferite, alegand aceeasi durata, pentru a obtine semafoare sincronizate pentru masini si pietoni.
    </div>
    <div class="">
      <div ref="fullscreen1" v-show="(fullscreen && showthis == 'fullscreen1') || (ios && showthis == 'fullscreen1')">
          <SemaforMasini  :style="{height: window.height + 'px'}" :light="light" :yellow="yellow"/>
      </div>

      <div ref="fullscreen2" v-show="fullscreen && showthis == 'fullscreen2' || (ios && showthis == 'fullscreen2')">
        <SemaforPietoni :style="{height: window.height + 'px'}" :light="!light"/>
      </div>
    </div>
    <div class="card" :style="{border: '1px solid', height: '50px'}" v-if="ios && showthis != 'none'" @click="showthis='none'">
      Inchide semafor
    </div>
    <div  v-show="running" id="toggleEl1" @click="toggleFullscreen('fullscreen1')">
      <img src="./assets/car.png" alt="">
    </div>
    <div v-show="running" id="toggleEl2" @click="toggleFullscreen('fullscreen2')">
      <img src="./assets/kid.png" alt="">
    </div>



  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    SemaforMasini: () => import("./components/SemaforMasini.vue"),
    SemaforPietoni: () => import("./components/SemaforPietoni.vue")
  },
  data: function() {
    return {
      light: false,
      time: 7,
      fullscreen: false,
      running: false,
      useyellow: true,
      yellowtime: 0,
      yellow: false,
      ios: false,
      showthis: 'none'
    }
  },
  created() {
    this.ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  },
  methods: {
    lightUp() {
      let vm = this;
      this.running = true;
      if (this.useyellow) {
        this.yellowtime = this.time - Math.floor(this.time/5) - 1;
        setTimeout(function() {
          vm.yellow = true;
        }, this.yellowtime * 1000);
      }
      setTimeout(function() {
        vm.light = !vm.light;
        vm.yellow = false;
      }, this.time * 1000);
    },
    toggleFullscreen(which) {
      this.showthis = which;
      let vm = this;
      let elem = this.$refs[which];
      if (elem.requestFullscreen) {
        elem.addEventListener("fullscreenchange", function() {
          vm.fullscreen = (document.fullscreenElement !== null);
        });
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.addEventListener("mozfullscreenchange", function() {
          vm.fullscreen = (document.mozFullscreenElement !== null);
        });
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.addEventListener("webkitfullscreenchange", function() {
          vm.fullscreen = (document.webkitFullscreenElement !== null);
        });
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.addEventListener("msfullscreenchange", function() {
          vm.fullscreen = (document.msFullscreenElement !== null);
        });
        elem.msRequestFullscreen();
      } else if (this.ios) {
        vm.fullscreen = true;
      }


    },
    updateComponent(){
     var self = this;
     self.show = false;

     this.$nextTick(function (){
       self.show = true;
     })
   }
  },
  watch: {
    light: function() {
      this.lightUp();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 30px;
  color: #2c3e50;

}
html {
  position: absolute;
  width: 100%;
  background-color: #e6f7e3;
}
body {
  padding: 0;
  margin: 0;
  position: absolute;
  height: 100%;
  width: 100%;
}
input {
  display: inline-block;
  width: 20%;
  font-size: 25px;
  text-align: center;
  border-radius: 5px;
}
#checkbox {
  display: inline-block;
  position: relative;
  width: 15px;
}
.label {
  font-size: 15px;
}
.start {
  display: inline-block;
  position: relative;
  background-color: #f7f0cf;
  color: #ff0000;
  margin: 0px;
  width: 50%;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid red;
  box-shadow: 0 10px 10px 5px #f46842;
}
.container {
  display: inline-block;
  position: relative;
  background-color: #f7f0cf;
  text-align: center;
  width: 50px;
  height: 20px;
  color: red;
  border-radius: 10px;
  border: 1px solid red;
  padding-top: 10px;
}
.card {
  display: block;
  position: relative;
  font-size: 15px;
  border-radius: 5px;
  margin: 50px;
  background-color: #fff;
  width: auto;
}
.semafor {
  display: block;
  position: relative;
  margin: 0px;
  background-color: #17202d;
  box-shadow: inset 15px 25px 25px 5px #334051;
}
.back {
  display: block;
  grid-gap: 0px;
  padding: 20px;
  position: relative;
  background-color: #07101c;
  height: 94%;
  margin: 0px;
}
.outerround1 {
  display: block;
  position: relative;
  border-radius: 50%;
  box-shadow: inset 0 5px 5px 0 #334051;
  display: block;
}
.outerround2 {
  position: relative;
  border-radius: 50%;
  box-shadow: inset 0 5px 5px 0 #334051;
  display: block;
}
.outerred {
  box-shadow: inset 0 5px 5px 0 #ce4040;
}
.outeryellow {
  box-shadow: inset 0 5px 5px 0 #a87d34;
}
.outergreen {
  box-shadow: inset 0 5px 5px 0 #458c3a;
}
.round {
  position: absolute;
  border-radius: 50%;
  display: block;
}
.green {
  background-color: #182610;
}
.red {
  background-color: #2d1010;
}
.yellow {
  background-image: radial-gradient(#dd870a, #ffa100, #895600);
  box-shadow: 0 5px 75px 5px #ffa100;
}
.redlit {
  background-image: radial-gradient(#dd0000, #ff0000, #770000);
  box-shadow: 0 5px 75px 5px #ff0000;
}
.greenlit {
  background-image: radial-gradient(#00dd00, #00ff00, #007700);
  box-shadow: 0 5px 75px 5px #1dff00;
}
</style>
