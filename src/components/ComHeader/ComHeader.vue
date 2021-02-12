<template>
  <div id="ComHeader">
    <el-container>
      <el-header>
        <div style="width: 100px;"></div>
        <div class="item_logo">
          <img src="@/assets/img/test.jpg" alt="" class="logo_img"/>
          <span class="logo_name">开白小助手 ·</span>
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Comheader",
  
}
</script>

<style scoped>
 .el-header, .el-footer {
    background-color: #FFF;
    color: #333;
    display: flex;
  }

  .item_logo{
    height: 60px;
    width: 220px;
    padding: 5px;
    position: relative;
  }
  
  /* 左侧logo */
  .logo_img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .logo_name{
    position: absolute;
    line-height: 50px;
    font-size: 25px;
    color: #000;
    right: 0;
  }
</style>