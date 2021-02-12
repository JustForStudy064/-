<template>
  <div id="Popular">
    <Header/>
    <el-container>
      <Aside/>
      <el-main>
        <NoticeCard/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header/Header"
import Aside from "@/components/Aside/Aside"
import NoticeCard from "@/components/NoticeCard/NoticeCard"

export default {
  name: "Popular",
  components:{
    Header,
    Aside,
    NoticeCard
  }
}
</script>

<style scoped>
  .el-main{
    padding: 10px;
  }
</style>