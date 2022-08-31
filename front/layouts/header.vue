<template>
  <header class="header">
    <nuxt-link
      slot="title"
      class="header_link"
      v-for="(route, index) in allRouter"
      :key="index"
      :to="route.path"
      @click="handleRouter(route)"
    >
      {{ route.name }}</nuxt-link
    >
  </header>
</template>

<script>
import { routerOptions } from "../.nuxt/router";
export default {
  layout: "header",
  components: {},
  computed: {
    allRouter() {
      return routerOptions.routes;
    }
  },
  data() {
    return {};
  },
  methods: {
    handleRouter() {
      console.log(route, "route");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  &_link {
    // display: block;
    margin:0 20px;
  }
  .el-menu-vertical-demo {
    width: 100px;
  }
}
</style>
