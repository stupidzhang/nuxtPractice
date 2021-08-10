<template>
  <div class="navBar">
    <Header></Header>
    <Nuxt />
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
}
</style>
