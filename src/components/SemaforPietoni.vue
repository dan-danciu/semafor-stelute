<template lang="html">
  <div class="semafor">
    <div class="back">
      <div :style="outerStyle" class="outerround1" :class="[{ outerred: light }, {outer : !light}]">
        <img :style="imgStyleBig" src="../assets/stand.png" alt="" v-if="light">
        <img :style="imgStyle" src="../assets/stand.png" alt="" :class="{lightup: light, dim: !light}">
      </div>
      <div :style="outerStyle" class="outerround2" :class="[{ outergreen: !light }, {outer : light}]">
        <img :style="imgStyleBig" src="../assets/walk.png" alt="" v-if="!light">
        <img :style="imgStyle" src="../assets/walk.png" alt="" :class="{lightup: !light, dim: light}">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    light: Boolean
  },
  computed: {
    outerStyle: function() {
      let min = Math.min(this.window.width, this.window.height/2);
      let size = Math.floor(min * .8);
      let tmargin = Math.floor((this.window.height/2 - size) / 2);
      let lmargin = Math.floor((this.window.width - size) / 2  - size * .05);
      return {
        height: size + 'px',
        width: size + 'px',
        marginTop: tmargin + 'px',
        marginLeft: lmargin + 'px'

      }
    },
    imgStyle: function() {
      let min = Math.min(this.window.width, this.window.height/2);
      let size = Math.floor(min * .75);
      let tmargin = Math.floor(size * .05);
      let lmargin = Math.floor(size * .03);
      return {
        height: size * .90 + 'px',
        width: size * .90 + 'px',
        marginTop: tmargin + 'px',
        marginLeft: lmargin + 'px'
      }
    },
    imgStyleBig: function() {
      let min = Math.min(this.window.width, this.window.height/2);
      let size = Math.floor(min * .75);
      return {
        position: 'absolute',
        height: size * .98 + 'px',
        width: size * .98 + 'px',
        left: '+18px',
        top: '+3px',
        filter: 'brightness(5) blur(5px) opacity(50%)'
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .lightup {
    filter: brightness(5) blur(2px) saturate(3);
  }
  .dim {
    filter: brightness(0.2);
  }
  .outer {
    box-shadow: inset 0 5px 5px 0 #334051;
    background-image: radial-gradient(#010205, #010205, #17202d);
  }
  .outerred {
    box-shadow: inset 0 5px 5px 0 #ce4040;
    background-image: radial-gradient(#17202d, #6f0000, #17202d);
  }
  .outergreen {
    box-shadow: inset 0 5px 5px 0 #458c3a;
    background-image: radial-gradient(#17202d, #005500, #17202d);
  }
</style>
