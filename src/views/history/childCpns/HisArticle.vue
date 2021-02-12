<template>
  <div id="HisArticle">
    <div class="search_bar_box" style="height: 40px;">
      <SearchBar class="search_bar"/>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
      width="55">
      </el-table-column>
      <el-table-column
        prop="article"
        label="收藏文章"
        width="280"
        class="articleTitle">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="140">
      </el-table-column>
      <el-table-column
        prop="times"
        label="文章被申请次数"
        sortable
        width="200">
      </el-table-column>
      <el-table-column
        label="审核结果"
        width="400">
          <template slot-scope="scope">
            <el-button size="mini" @click="settingClick(scope.$row)">转载设置</el-button>
            <el-button size="mini" type="primary" @click="deleteClick(scope.$row)">删文提醒</el-button>
            <el-button size="mini" @click="checkClick">查看该篇申请人</el-button>
          </template>
      </el-table-column>
    </el-table>

    <el-pagination class="pagin_nav"
                    background
                    layout="prev, pager, next"
                    :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar/SearchBar"

export default {
  name:"HisArticle",
  components:{
    SearchBar,
  },
  data(){
    return {
      tableData:[{
         article: "《如何看待华南理工大学军训》",
         date: "2020-01-28",
         times: "18",
      },{
         article: "《如何看待华南理工大学军训》",
         date: "2020-01-29",
         times: "19",
      },{
         article: "《如何看待华南理工大学军训》",
         date: "2020-01-30",
         times: "20",
      }]
    }
  },
  methods:{
    settingClick(row){
      this.$message("点击了转载设置")
      this.$emit("settingClick")
    },
    deleteClick(row){
      this.$message("点击了删文提醒")
      this.$emit("deleteAlert")
    },
    checkClick(){
      this.$message("点击了查看该篇申请人")
      this.$emit("addAlert")
    }
  }
}
</script>

<style>
 #HisArticle{
   background: #fff;
   height: 450px;
   position: relative;
 }
 
 .search_bar_box{
    position: relative;
    height: 50px;
  }

  .search_bar{
    position:absolute;
  }

  .pagin_nav{
    position: absolute;
    right: 50px;
    bottom: 0;
  }
</style>