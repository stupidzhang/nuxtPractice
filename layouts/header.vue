<template>
  <div class="header">
    <nuxt-link
      v-for="(route, index) in allRouter"
      :key="index"
      :to="route.path"
      @click="handleRouter(route)"
      >{{ route.name }}</nuxt-link
    >
  </div>
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
}
</style>
