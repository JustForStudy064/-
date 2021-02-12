<template>
  <div id="Message">
    <Header/>
    <el-container>
      <Aside/>
      <el-main>
        <!-- <notice-card/> -->
        <Chat/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header/Header"
import Aside from "@/components/Aside/Aside"
import NoticeCard from "@/components/NoticeCard/NoticeCard"

import Chat from "./childCpns/Chat"

export default {
  name: "Message",
  components:{
    Header,
    Aside,
    NoticeCard,
    Chat,
  }
}
</script>

<style scoped>
  .el-main{
    padding: 0 10px;
  }
</style>