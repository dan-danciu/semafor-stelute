import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import NoSleep from "nosleep.js/dist/NoSleep.min.js"

Vue.mixin({
  data: function() {
    return {
      window: {
        width: 0,
        height: 0
      }

    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    })
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
});

window.app = new Vue({
  render: h => h(App),
}).$mount('#app')



var noSleep = new NoSleep();

function enableNoSleep() {
  noSleep.enable();
}
var toggleEl1 = document.querySelector("#toggleEl1");
toggleEl1.addEventListener('click', enableNoSleep, false);
var toggleEl2 = document.querySelector("#toggleEl2");
toggleEl2.addEventListener('click', enableNoSleep, false);

noSleep.disable();
