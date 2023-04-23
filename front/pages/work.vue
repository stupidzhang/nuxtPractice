<template>
  <div class="work">
    <div class="tite">rap2转换接口工具</div>
    <div class="upload">
      <el-upload
        class="upload-demo"
        action=""
        :http-request="handleUpload"
        :on-remove="handleRemove"
        accept=".json,.JSON"
        :on-error="handleError"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传json文件</div>
      </el-upload>
    </div>
    <el-button :disabled="!fileObj.name" type="primary" class="button" @click="handleToCom">组合</el-button>
    <div class="main">
      <el-input v-model="text" type="textarea"></el-input>
    </div>
  </div>
</template>

<script>
import { uploadFile } from "@/service/home";

export default {
  components: {},
  data() {
    return {
      fileObj: {},
      text:''
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
  },
  methods: {
    handleUpload(fd) {
      const file = new FormData();
      file.append("file", fd.file);
      uploadFile(file).then((res) => {
        if (res.data) {
          this.fileObj = res.data.info;
          this.$notify.success("已上传");
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    handleError(err, file, fileList) {
      console.log(err,"err")
      fileList = [];
    },
    handleRemove() {
      this.fileObj = {};
    },
    handleToCom(){

    }
  },
};
</script>

<style lang="scss" scoped>
.work {
}
</style>
