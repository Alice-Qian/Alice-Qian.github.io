<template lang="pug">
  div.container
    Nav(:transitionFlag="transitionFlag")
    Banner
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Home/Nav.vue";
import Banner from "@/components/Home/Banner.vue";
import * as api from "@/api/index";

@Component({
  components: {
    Nav,
    Banner
  }
})
export default class Home extends Vue {
  private transitionFlag!: boolean;
  private data() {
    return {
      transitionFlag: false
    };
  }
  private mounted() {
    this.addEventListenerScroll();
    this.updateInfo();
  }
  private updateInfo() {
    api.list().then(res => {
      console.log(res)
    });
  }
  private addEventListenerScroll(): void {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop + document.documentElement.scrollTop >= 80) {
        this.transitionFlag = true;
      } else {
        this.transitionFlag = false;
      }
    });
  }
}
</script>
<style scoped lang="less">
.container {
  padding-top: 80px;
  box-sizing: border-box;
}
</style>

