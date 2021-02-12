<template>
  <div id="OriginTable">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="article"
        label="收藏文章"
        width="220"
        class="articleTitle">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="140">
      </el-table-column>
      <el-table-column
        prop="origin_name"
        label="申请公众号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="ID"
        sortable
        label="ID"
        width="100">
      </el-table-column>
      <el-table-column
        prop="fans"
        label="粉丝数"
        width="100"
        sortable>
      </el-table-column>
      <el-table-column
        prop="readCount"
        sortable
        label="头条阅读量"
        width="120">
      </el-table-column>
      <el-table-column
        prop="previewUrl"
        label="预览链接"
        width="180">
      </el-table-column>
      <el-table-column
        prop="applicant"
        label="在看"
        width="80">
      </el-table-column>
      <el-table-column
        prop="good_rate"
        label="点赞率"
        width="80">
      </el-table-column>
      <el-table-column
        label="审核结果">
          <template slot-scope="scope">
            <div
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              class="to-apply">
              {{scope.row.to_apply}}<span class="array_right">&gt;</span>
            </div>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "OriginTable",
  data(){
    return {
      tableData: [{
        article: '《如何看待华南理工军训频繁上热搜？》',
        origin_name: "督督科技",
        date:"2020-01-30",
        ID: '10086',
        location: '二条',
        fans: 10086,
        readCount: 10086,
        previewUrl: "http://www.chenct.top",
        applicant: 135,
        to_apply: "去申请"
      },{
        article: '《如何看待华南理工军训频繁上热搜？》',
        origin_name: "督督科技",
        date:"2020-01-28",
        ID: '10086',
        location: '二条',
        fans: 10086,
        readCount: 10086,
        previewUrl: "http://www.chenct.top",
        applicant: 135,
        to_apply: "去申请"
      },{
        article: '《如何看待华南理工军训频繁上热搜？》',
        origin_name: "督督科技",
        date:"2020-01-27",
        ID: '10086',
        location: '二条',
        fans: 10086,
        readCount: 10086,
        previewUrl: "http://www.chenct.top",
        applicant: 135,
        to_apply: "去申请"
      }],
    }
  }
}
</script>

<style>
  #OriginTable{
    margin-left: 20px;  
  }

 .cell{
   overflow: hidden;
   /* 溢出的文字用...表示 */
   text-overflow: ellipsis;
   /* 规定段落中的文字不能换行 */
   white-space: nowrap;
 }

</style>