<template lang="html">
  <div class="semafor">
    <div class="back" :style="{paddingTop: this.window.width / 15 + 'px'}">
      <div :style="{height: this.window.width - 70 +'px', width: this.window.width - 70 +'px'}" class="innerround1" :class="[{ innerred: light }, {'' : !light}]">
        <div :style="{height: this.window.width - 90 +'px', width: this.window.width - 90 +'px'}" class="round" :class="[{ redlit: light }, {yellow: yellow}, {red : !light}]"/>
      </div>
      <div :style="{height: this.window.width - 70 +'px', width: this.window.width - 70 +'px'}" class="innerround2" :class="[{ innergreen: !light }, {'' : light}]">
        <div :style="{height: this.window.width - 90 +'px', width: this.window.width - 90 +'px'}" class="round" :class="[{greenlit : !light}, {green : light}]"/>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: {
    light: Boolean,
    yellow: Boolean
  }
}
</script>

<style lang="css">
</style>
