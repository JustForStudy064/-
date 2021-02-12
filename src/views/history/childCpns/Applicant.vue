<template>
  <div id="Applicant">
    <h2>查看该篇申请人</h2>
    <div style="padding: 10px;">
      <SearchBar/>
    </div>
    <el-table :data="tableData"
              stripe
              style="width: 100%;padding:10px 0;">
    <el-table-column
      type="selection"
      prop="applicant"
      label="申请人"
      width="100">
    </el-table-column>
    <el-table-column
      prop="origin"
      label="申请公众号"
      width="160">
    </el-table-column>
     <el-table-column
      prop="date"
      label="日期"
      width="160">
    </el-table-column>
    <el-table-column
      prop="addblack"
      label="转载黑名单">
       <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">加入黑名单</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination background
                layout="prev, pager, next"
                :total="1000">
  </el-pagination>
  <el-button type="primary" @click="addClick" style="margin-top: 20px;">批量加入黑名单</el-button>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar/SearchBar"

export default {
  name:"Applicant",
  data(){
    return {
      tableData:[{
        "applicant": "申请人A",
        "origin": "公众号A",
        "date": "2021-01-31"
      },{
        "applicant": "申请人B",
        "origin": "公众号B",
        "date": "2021-01-31"
      },{
        "applicant": "申请人C",
        "origin": "公众号C",
        "date": "2021-01-31"
      }]
    }
  },
  components:{
    SearchBar
  },
  methods:{
    handleEdit(index, row){
      this.$message(index.toString() + "对象加入黑名单")
    },
    addClick(){
      this.$message("批量加入黑名单")
      this.$emit("addTotalClick")
    }
  }
}
</script>

<style scoped>
  #Applicant{
    position:absolute;
    left: 30%;
    top: 100px;
    padding: 20px;
    min-height: 450px;
    border-radius: 10px;
    width:600px;
    background:#fff;
    text-align: center;
    z-index: 99;
 }
</style>