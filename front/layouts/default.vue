<template>
  <div class="navBar">
    <Header></Header>
    <main class="main">
    <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from "./header";
export default {
  components: { Header },

  data() {
    return {};
  },
  methods: {
    // handleRouter() {
    //   console.log(route, "route");
    // }
  }
};
</script>

<style lang="scss" scoped>
.navBar {
  height: 100%;
  overflow: hidden;
}
.main{
  padding:20px;
  height:calc(100% - 100px)
}
</style>
