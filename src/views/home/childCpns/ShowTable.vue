<template>
  <div id="ShowTable">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="article"
        label="收藏文章"
        width="220">
        <template slot-scope="scope">
          <div class="outer_box">
            <img src="@/assets/img/test.jpg" class="article_img" alt="">
            <div class="article_desc">
              <el-tooltip class="item" effect="dark" :content="scope.row.article" placement="top-start">
                <div class="article_title">{{scope.row.article}}</div>
              </el-tooltip>
              <div class="article_right">
                <img src="@/assets/img/test.jpg" class="head_img" alt="">
                <el-tooltip class="item" effect="dark" :content="scope.row.origin_name" placement="right-start">
                  <span class="origin_name">{{scope.row.origin_name}}</span>
                </el-tooltip>
              </div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="140">
      </el-table-column>
      <el-table-column
        prop="location"
        label="位置"
        width="100">
      </el-table-column>
      <el-table-column
        prop="be_read"
        sortable
        label="文章阅读量"
        width="120">
      </el-table-column>
      <el-table-column
        prop="avg_read"
        label="该位置平均阅读量"
        width="160"
        sortable>
      </el-table-column>
      <el-table-column
        prop="share_count"
        sortable
        label="分享量"
        width="100">
      </el-table-column>
      <el-table-column
        prop="share_rate"
        label="分享率"
        width="100">
      </el-table-column>
      <el-table-column
        prop="at_look"
        label="在看"
        width="80">
      </el-table-column>
      <el-table-column
        prop="good_rate"
        label="点赞率"
        width="80">
      </el-table-column>
      <el-table-column
        label="向原创公众号申请">
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
    <!-- <message-box :articleData="articleData"
                 @closeClick="closeClick"
                 v-show="toApply"/>
    <pop-layer v-show="toApply"/> -->
  </div>
</template>

<script>
import MessageBox from "./MessageBox"
import PopLayer from "./PopLayer"

export default {
    name: "ShowTable",
    data() {
      return {
        tableData: [{
          article: '《如何看待华南理工军训频繁上热搜？》',
          origin_name: "督督科技团",
          date: '2016-05-01',
          location: '二条',
          be_read: 10086,
          avg_read: 10086,
          share_count: 1550,
          share_rate: '10%',
          good_rate: '10%',
          at_look: 135,
          to_apply: "去申请"
        },{
          article: '《如何看待华南理工大学大学城校区军训1.7日晚24连数院女生发言?》',
          origin_name: "小灯神",
          date: '2016-05-03',
          location: '头条',
          be_read: 10086,
          avg_read: 10086,
          share_count: 1550,
          share_rate: '10%',
          good_rate: '10%',
          at_look: 135,
          to_apply: "等待开白"
        },{
          article: '《如何看待1.8华南理工大学学生军训结营仪式领导迟到使六千多学生在寒风中等待？》',
          origin_name: "督督科技",
          date: '2016-05-04',
          location: '头条',
          be_read: 10086,
          avg_read: 10086,
          share_count: 1550,
          share_rate: '10%',
          good_rate: '10%',
          at_look: 135,
          to_apply: "无需开白"
        },{
          article: '《如何看待华工学生知乎治校？》',
          origin_name: "督督科技团队",
          date: '2016-05-05',
          location: '头条',
          be_read: 10086,
          avg_read: 10086,
          share_count: 1550,
          share_rate: '10%',
          good_rate: '10%',
          at_look: 135,
          to_apply: "已开白"
        }],
        articleData:{
          atitle: "10万+的网络报文",
          adate: "2020-12-01",
          account: "督督科技"
        },
      }
    },
    methods:{
      handleEdit(index, row) {
        this.$message(index.toString());
        let articleObj = {}
        articleObj.atitle = row.article
        articleObj.adate = row.date
        articleObj.account = row.origin_name
        this.articleData = articleObj
        this.$emit("messageShow", articleObj)
      },
      closeClick(){
        this.toApply = false;
      }
    },
    components:{
      MessageBox,
      PopLayer
    }
}
</script>

<style scoped>
  #ShowTable{
    margin-top: 10px;
    height: 400px;
    background: #fff;
  }

 .article_img{
   width: 50px;
   height: 50px;
 }

 .outer_box{
   display: flex;
   flex-wrap:nowrap;
 }

 .article_title{
   overflow: hidden;
   /* 溢出的文字用...表示 */
   text-overflow: ellipsis;
   /* 规定段落中的文字不能换行 */
   white-space: nowrap;
   max-width: 120px;
 }

 .article_desc{
   margin-left: 4px;
 }

 .article_right{
   display: flex;
 }

 .head_img{
   margin-left: 5px;
   width: 30px;
   height: 30px;
   border-radius: 50%;
 }

 .origin_name{
   padding: 5px 0;
   margin-left: 10px;
   overflow: hidden;
   /* 溢出的文字用...表示 */
   text-overflow: ellipsis;
   /* 规定段落中的文字不能换行 */
   white-space: nowrap;
   max-width: 80px;
 }
 
.to-apply{
  color: blue;
}

</style>