<template>
  <div class="_css">
    <div class="shengbei">
      圣杯
      <div class="container">我是圣杯圣杯圣杯圣杯圣杯圣杯圣杯圣杯圣杯2</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>

    <div class="sfy">
      <div class="header">双飞翼</div>
      <div class="main">
        <div class="container">
          我是双飞翼双飞翼双飞翼双飞翼双飞翼双飞翼双飞翼双飞翼双飞翼双飞翼双飞翼
        </div>
      </div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
._css {
  .shengbei {
    padding: 0 200px;
    min-width: 500px;
    .container {
      float: left;
      width: 100%;
      background: pink;
    }
    .left {
      float: left;
      position: relative;
      width: 200px;
      margin-left: -100%;
      background: grey;
      left: -200px;
    }
    .right {
      float: left;
      position: relative;
      width: 200px;
      margin-left: -200px;
      background: yellow;
      right: -200px;
    }
  }
  .sfy {
    margin-top:40px;
    min-width:500px;
    .header{
      width:100%;
    }
    .main,
    .left,
    .right {
      float: left;
      height: 300px;
    }
    .main {
      width: 100%;
      background: pink;
      .container {
        padding:0 200px;
      }
      .container::after{
					content: "";
					display: block;
					clear: both;
				}
    }
    .left {
      width: 200px;
      background: grey;
      margin-left: -100%;
    }
    .right {
      width: 200px;
      margin-left: -200px;
      background: yellow;
    }
  }
}
</style>
