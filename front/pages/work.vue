<template>
  <div class="work">
    <div class="tite">rap2转换接口工具</div>
    <div class="upload">
      <el-upload
        class="upload-demo"
        action=""
        :limit="1"
        :http-request="handleUpload"
        :on-remove="handleRemove"
        accept=".json,.JSON"
        :on-error="handleError"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传json文件</div>
      </el-upload>
    </div>
    <el-button type="primary" class="button" @click="handleToCom"
      >解析</el-button
    >
    <div class="main">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane
          v-for="(item, index) in apiTree"
          :key="index"
          :label="item.name"
          :name="index + ''"
          >{{ item.name }}
          <el-input v-model="item.text" type="textarea" :rows="22"></el-input>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { uploadFile, getUrlById } from "@/service/home";

export default {
  components: {},
  data() {
    return {
      fileObj: {},
      text: "",
      currentId: null,
      apiTree: [],
      activeName: 0,
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
          this.currentId = res.data;
          this.$notify.success("已上传");
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    handleError(err, file, fileList) {
      console.log(err, "err");
      fileList = [];
    },
    handleRemove() {
      this.fileObj = {};
    },
    handleToCom() {
      getUrlById({ params: { id: this.currentId } }).then((res) => {
        this.apiTree = res.data.item;
        res.data.item.forEach((list) => {
          let fileData = "";
          list.item.forEach((api) => {
            const path = api.request.url.path.length && api.request.url.path[0];
            if (path) {
              const nameIndex = path.lastIndexOf("/");
              // 接口名
              const name = path.substring(nameIndex + 1, path.length);
              // get post
              const method = api.request.method.toLowerCase();
              const queryKey = method === "get" ? "params" : "data";
              const value =
                "//" +
                api.name +
                "\r\nexport function " +
                name +
                "(params) { \r\n  return axios({ \r\n    url:'" +
                api.request.url.path[0] +
                "', \r\n" +
                "    method:'" +
                method +
                "', \r\n    " +
                queryKey +
                ":params \r\n  }) \r\n}\r\n";
              fileData += value;
            }
          });
          list.text = fileData;
        });
        console.log(res, "ressss");
      });
    },
    handleClick() {},
  },
};
</script>

<style lang="scss" scoped>
.work {
  height: 100%;
  overflow: auto;
}
</style>
