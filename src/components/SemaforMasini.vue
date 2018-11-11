<template lang="html">
  <div class="semafor">
    <div class="back">
      <div :style="outerStyle" class="outerround1" :class="[{ outerred: light }, {outeryellow: yellow && !light}]">
        <div :style="lightStyle" class="round" :class="[{ redlit: light }, {yellow: yellow}, {red : !light}]"/>
      </div>
      <div :style="outerStyle" class="outerround2" :class="[{ outergreen: !light && !yellow }, {'' : light}]">
        <div :style="lightStyle" class="round" :class="[{greenlit : !light && !yellow }, {green : light || yellow}]"/>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: {
    light: Boolean,
    yellow: Boolean
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
    lightStyle: function() {
      let min = Math.min(this.window.width, this.window.height/2);
      let size = Math.floor(min * .75);
      let tmargin = Math.floor(size * .07);
      let lmargin = Math.floor(size * .03);
      return {
        height: size + 'px',
        width: size + 'px',
        marginTop: tmargin + 'px',
        marginLeft: lmargin + 'px'
      }
    }
  }

}
</script>

<style lang="css">
</style>
