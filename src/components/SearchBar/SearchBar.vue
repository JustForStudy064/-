<template>
  <div id="SearchBar">
    <el-input placeholder="请输入内容" class="input-with-select" v-model="content">
      <span slot="prepend">全部</span>
      <el-button slot="append" 
                 icon="el-icon-search" 
                 type="primary" 
                 @click="searchClick">搜索</el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data (){
    return {
      content: "",
    }
  },
  methods:{
    searchClick(){
      this.$message(this.content)
    }
  }
}
</script>

<style scoped>
  .el-input{
    width: 500px;
  }

  .el-button--primary{
    background: blue;
    color: #fff;
  }

</style>