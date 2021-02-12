<template>
  <div id="ApplyList">
    <div class="search_bar_box" style="height: 40px;">
      <SearchBar class="search_bar"/>
    </div>
    <el-button class="notice" type="success">通知所有人</el-button>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
      type="selection"
      width="55">
      </el-table-column>
      <el-table-column
        prop="applicant"
        label="申请人"
        width="200"
        class="articleTitle">
      </el-table-column>
      <el-table-column
        prop="account"
        label="他申请的公众号"
        width="280">
      </el-table-column>
      <el-table-column
        label="操作"
        width="400">
          <template slot-scope="scope">
            <el-button size="mini" @click="checkArticle(scope.$row)">ta申请的文章</el-button>
            <el-button size="mini" type="primary">通知ta</el-button>
            <el-button size="mini">加入黑名单</el-button>
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
  name:"ApplyList",
  components:{
    SearchBar,
  },
  data(){
    return{
      tableData:[{
         applicant: "申请人昵称a",
         account: "公众号1、公众号2",
      },{
         applicant: "申请人昵称b",
         account: "公众号1、公众号2",
      },{
         applicant: "申请人昵称c",
         account: "公众号1、公众号2",
      }]
    }
  },
  methods:{
    checkArticle(row){
      
      console.log(row)
    }
  }
}
</script>

<style>
 #ApplyList{
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

  .notice{
    position: absolute;
    right: 10px;
    top: 0;
  }
</style>