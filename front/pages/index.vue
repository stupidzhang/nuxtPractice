<template>
  <div class="index">
    <span>hello,nuxt</span>
    <el-button type="primary" @click="handleRouter">跳转</el-button>
    <div>{{ title }}</div>
  </div>
</template>

<script>
import { getVerifyCode } from "@/service/home";
export default {
  middleware: "index",
  components: {},
  async asyncData({ params }) {
    const list = await getVerifyCode({ params });
    return { title:list.data.data };
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
