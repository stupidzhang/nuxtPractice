<template>
  <div class="index">
    <span>hello,nuxt</span>
    <el-button type="primary" @click="handleRouter">跳转</el-button>
    <div>{{ title }}</div>
    <el-button @click="handleSave">保存表单接口</el-button>
  </div>
</template>

<script>
import { getVerifyCode, saveForm } from "@/service/home";
export default {
  middleware: "index",
  components: {},
  async asyncData({ params }) {
    const list = await getVerifyCode({ params: { id: 1 } });
    return { title: list.data };
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
    },
    handleSave() {
      saveForm({
        data: {
          formName: "表单1",
          formDataJson:''
        }
      }).then((res) => {
        console.log(res,"ress")
        if(res.code==='000000')
        this.$notify.success('保存成功')
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
