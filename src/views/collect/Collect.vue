<template>
  <div id="Collect">
    <Header/>
    <el-container>
      <Aside/>
      <el-main>

      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header/Header"
import Aside from "@/components/Aside/Aside"

export default {
  name: "Collect",
  components:{
    Header,
    Aside
  }
}
</script>

<style scoped>

</style>