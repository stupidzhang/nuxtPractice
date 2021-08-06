<template>
  <div class="index">
    <span>hello,nuxt</span>
    <el-button type="primary" @click="handleRouter">跳转</el-button>
    <navBar></navBar>
  </div>
</template>

<script>
import navBar from "../components/layout/navBar";
export default {
  components: {
    navBar
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleRouter() {
      this.$router.push({
        name: "work",
        query: {
          id: 1
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.index {
  text-align: center;
}
</style>
