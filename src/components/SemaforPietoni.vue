<template lang="html">
  <div class="semafor">
    <div class="back" :style="{paddingTop: this.window.width / 15 + 'px'}">
      <div :style="{height: this.window.width - 70 +'px', width: this.window.width - 70 +'px'}" class="innerround1" :class="[{ innerred: light }, {'' : !light}]">
        <div :style="{height: this.window.width - 90 +'px', width: this.window.width - 90 +'px'}" class="round" :class="[{ redlit: light }, {red : !light}]">
          <img :style="{width: this.window.width - 120 +'px'}" src="../assets/stand.png" alt="">
        </div>
      </div>
      <div :style="{height: this.window.width - 70 +'px', width: this.window.width - 70 +'px'}" class="innerround2" :class="[{ innergreen: !light }, {'' : light}]">
        <div :style="{height: this.window.width - 90 +'px', width: this.window.width - 90 +'px'}" class="round" :class="[{greenlit : !light}, {green : light}]">
          <img :style="{width: this.window.width - 120 +'px'}" src="../assets/walk.png" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    light: Boolean
  }
}
</script>

<style lang="css">
.semafor img {
  padding-top: 10px;
}
</style>
