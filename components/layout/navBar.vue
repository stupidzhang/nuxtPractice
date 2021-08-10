<template>
  <div class="navBar">
    <nuxt-link
      v-for="(route, index) in allRouter"
      :key="index"
      :to="route.path"
      @click="handleRouter"
      >{{ route.name }}</nuxt-link
    >
  </div>
</template>

<script>
import { routerOptions } from "../../.nuxt/router";
export default {
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
    handleRouter() {}
  }
};
</script>

<style lang="scss" scoped>
.navBar {
}
</style>
