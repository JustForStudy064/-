<template>
  <div id="Aside">
      <el-container>
        <el-aside width="200px">
          <el-menu
          :default-active=active
          class="el-menu-vertical-demo"
          router>
          <el-menu-item index="/home">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/message">
            <i class="el-icon-chat-dot-square"></i>
            <span slot="title">消息通知</span>
          </el-menu-item>
          <el-menu-item index="/collect">
            <i class="el-icon-chat-round"></i>
            <span slot="title">收藏公众号</span>
          </el-menu-item>
          <el-menu-item index="/popular">
            <i class="el-icon-medal"></i>
            <span slot="title">热转榜单</span>
          </el-menu-item>
          <el-menu-item index="/history">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">转载记录</span>
          </el-menu-item>
          <el-menu-item index="/demand">
            <i class="el-icon-price-tag"></i>
            <span slot="title">转载要求</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data(){
    return {
      active: "/home"
    }
  },
  created(){
    this.active = "/" + this.$route.name
  },
  methods: {
   
  }
}
</script>

<style scoped>
  .el-menu-vertical-demo{
    min-height: 660px;
  }

  .el-aside{
    margin-top: 10px;
  }
</style>