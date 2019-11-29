<template lang="pug">
  div.banner-container
    div.banner-center
      div.header
        img(src="../../assets/images/me.jpeg", alt="")
      div.sign 
        p 热爱可抵岁月漫长
        p Love is worth years 
    div.banner-left
    div.banner-right
         
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Banner extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.banner-container {
  width: 100%;
  height: 550px;
  background: url("../../assets/images/centerbg.jpg") no-repeat center center;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  overflow: hidden;
  .banner-left {
    background: #fff;
    width: 101%;
    position: absolute;
    bottom: -80px;
    right: 48%;
    height: 200px;
    transform: rotate(6deg);
  }
  .banner-right {
    background: #fff;
    width: 101%;
    position: absolute;
    bottom: -80px;
    left: 48%;
    height: 200px;
    transform: rotate(-6deg);
  }
  .banner-center {
    width: 400px;
    height: 210px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    .header {
      width: 80px;
      height: 80px;
      align-self: center;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .sign {
      width: 400px;
      height: 80px;
      margin-top: 30px;
      font-size: 17px;
      color: #eaeadf;
      background: rgba(0, 0, 0, 0.66);
      align-self: center;
      text-align: center;
      line-height: 50px;
      p:last-child {
        line-height: 20px;
        font-size: 14px;
      }
    }
  }
}
</style>
