<template lang="pug">
  div#app
    router-view
</template>

<style lang="less">
@import url("assets/css/reset.less");
@import url("assets/css/icon.less");
html,
body {
  width: 100%;
  height: 100%;
  #app {
    width: 100%;
    height: 100%;
    .container {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
