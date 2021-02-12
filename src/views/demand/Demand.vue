<template>
  <div id="Demand">
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
  name: "Demand",
  data(){
    return {

    }
  },
  components:{
    Header,
    Aside
  }
}
</script>

<style scoped>

</style>
 
</style>