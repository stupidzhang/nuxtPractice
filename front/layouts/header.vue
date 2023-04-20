<template>
  <header class="header">
    <el-menu :default-active="activeMenuIndex" class="el-menu-demo" mode="horizontal">
      <nuxt-link
        class="header_link"
        v-for="(route, index) in allRouter"
        :key="index"
        :to="route.path"
      >
        <el-menu-item :index="index+''">{{ route.name }}</el-menu-item>
        </nuxt-link>
    </el-menu>
  </header>
</template>

<script>
import { routerOptions } from '../.nuxt/router';
export default {
  layout: 'header',
  components: {},
  computed: {
    allRouter() {
      return routerOptions.routes;
    },
  },
  data() {
    return {
      activeMenuIndex:'0',
    };
  },
  mounted() {
    this.getActiveIndex()
  },
  methods: {
   getActiveIndex(){
    this.activeMenuIndex=  this.allRouter.findIndex(item=>item.name===this.$route.name)+''
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  .el-menu{

    display: flex;
    .el-menu-item{
       &.is-active{
         color:#409eff;
         background: transparent;
    }
    }
  }
  &_link {
    // display: block;
    margin: 0 20px;
    text-decoration: none;

  }
}
</style>
