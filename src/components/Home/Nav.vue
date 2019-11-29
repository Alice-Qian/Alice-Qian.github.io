<template lang="pug">
  div.nav-container(:class="transitionFlag?'nav-container1':''")
    div.nav-left
      img(src="../../assets/images/postload.gif", alt="")
    div.nav-right
      ul
        li
          i.iconfont.icon-Category
        li
          i.iconfont.icon-searchamagnifyingglass
        li
          i.iconfont.icon-1USER
         
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Nav extends Vue {
  @Prop()
  private transitionFlag!: boolean;
  @Watch("transitionFlag")
  onTransitionChanged(val: boolean, oldVal: boolean) {
    this.transitionFlag = val;
  }
  // private mounted() {
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav-container {
  width: 100%;
  height: 80px;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  position: fixed;
  z-index: 9999;
  top: 0;
  background: #fff;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  .nav-left {
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nav-right {
    ul {
      display: flex;
      li {
        margin-right: 20px;
        margin-top: 8px;
        i {
          font-size: 30px;
        }
      }
    }
  }
}
.nav-container1 {
  top: -100px;
}
</style>
