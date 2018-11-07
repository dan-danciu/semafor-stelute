<template>
  <div id="app">
    <br><br>
    <div class="label" v-if="!running">
      <h2>Durata semafor (secunde):</h2> <input v-model="time">

    </div>
    <br><br>
    <div class="start" @click="lightUp" v-if="!running">
      Start
    </div>
    <div  class="container" v-show="running" id="toggleEl1" @click="toggle('fullscreen1')">
      <img src="./assets/car.png" alt="">
    </div>
    <div class="container" v-show="running" id="toggleEl2" @click="toggle('fullscreen2')">
      <img src="./assets/kid.png" alt="">
    </div>
    <div class="" v-show="fullscreen">
      <FullScreen ref="fullscreen1" @change="fullscreenChange">
          <SemaforMasini  :style="{height: window.height + 'px'}" :light="light" :yellow="yellow"/>
      </FullScreen>

      <FullScreen ref="fullscreen2" @change="fullscreenChange">
        <SemaforPietoni :style="{height: window.height + 'px'}" :light="!light"/>
      </FullScreen>
    </div>


  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    SemaforMasini: () => import("./components/SemaforMasini.vue"),
    SemaforPietoni: () => import("./components/SemaforPietoni.vue"),
    FullScreen: () => import("vue-fullscreen/src/component.vue")
  },
  data: function() {
    return {
      light: false,
      time: 5,
      fullscreen: false,
      running: false,
      yellowtime: 0,
      yellow: false
    }
  },
  methods: {
    lightUp() {
      let vm = this;
      this.yellowtime = this.time - Math.floor(this.time/3);
      this.running = true;
      setTimeout(function() {
        vm.yellow = true;
      }, this.yellowtime * 1000);
      setTimeout(function() {
        vm.light = !vm.light;
        vm.yellow = false;
      }, this.time * 1000);
    },
    toggle(which) {
        this.$refs[which].toggle()
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;

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
  height: 100%;
  width: 100%;
  color: #2c3e50;

}
html {
  position: absolute;
  width: 100%;
  height: 100%;
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
  width: 50%;
  font-size: 25px;
  text-align: center;
  border-radius: 5px;
}
.label {
  font-size: 15px;
}
.start {
  display: inline-block;
  position: relative;
  margin: 0px;
  width: 50%;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid red;
  box-shadow: 0 10px 10px 5px red;
}
.container {
  display: block;
  position: relative;
  top: -100px;
}
.semafor {
  display: block;
  position: relative;
  margin: 0px;
  background-color: #17202d;
  width: 100%;
  height: 100%;
  box-shadow: inset 15px 25px 25px 5px #334051;
}
.back {
  display: block;
  grid-gap: 0px;
  padding: 20px;
  position: relative;
  background-color: #07101c;
  width: 90%;
  height: 90%;
  margin: 0px;
}
.innerround1 {
  position: relative;
  border-radius: 50%;
  box-shadow: inset 0 15px 15px 0 #334051;
  display: block;
  left: +20px;
}
.innerround2 {
  position: relative;
  border-radius: 50%;
  box-shadow: inset 0 15px 15px 0 #334051;
  display: block;
  left: +20px;
  top: +20px;
}
.innerred {
  box-shadow: inset -5px 5px 5px 0 red;
}
.innergreen {
  box-shadow: inset -5px 5px 5px 0 green;
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
  background-color: #ffa100;
}
.redlit {
  background-color: #ff0000;
}
.greenlit {
  background-color: #1dff00;
}
</style>
