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
export default {
  components: {},
  computed: {
    allRouter() {
      console.log(this.$router);
      return this.$router;
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
