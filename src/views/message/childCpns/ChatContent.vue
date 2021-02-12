<template>
  <div id="ChatContent">
    <div class="top_container">
      <div class="account_box">
        <img src="@/assets/img/test.jpg" alt=""/>
        <span><strong>&nbsp;&nbsp;公众号名称</strong></span>
      </div>
      <div class="desc_box">
        <span>其他消息也在这里显示, 包括<br>微信后台开白次数限制、节假开白时间特殊安排</span>
      </div>
      <div class="apply_history" @click="applyClick">我在该号的申请历史</div>
    </div>

    <el-card class="chat_msg">
      <div class="top_msg">
      作者推荐语：<br>
      这是原创方编辑发送的推荐语，今天这篇文章数据不错，欢迎转载，巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉
      </div>  
      <div class="bottom_msg">
        <div class="article_card">
          <div class="article_title">文章标题巴拉巴拉不了巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉，显示两行...</div>
          <div class="article_desc_container">
            <div>
              这里是消息摘要,巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉
            </div>
            <img src="@/assets/img/test.jpg" alt="" class="article_img"/>
          </div>
          <div class="account_desc">
            <img src="@/assets/img/test.jpg" alt="" class="origin_img"/>
            <span>公众号名称</span>
          </div>
        </div>
        <div class="article_data">
          <div class="article_data_left">
            <div class="article_item el-icon-view">阅读量: 12.00</div>
            <div class="article_item el-icon-star-on">在看数: 12.00</div>
            <div class="article_item el-icon-thumb">点赞数: 12.00</div>
            <div class="article_item el-icon-share">分享量: 12.00</div>
          </div>
          <div class="article_data_right">
            <div class="article_item el-icon-reading">打开率: 5.86%</div>
            <div class="article_item el-icon-news">点赞在看率: 5.23%</div>
            <div class="article_item el-icon-magic-stick">分享率: 5.23%</div>
          </div>
        </div>
      </div>
      <div class="article_button">
        <el-button size="mini">收藏到文章</el-button>
        <el-button size="mini">马上申请转载</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name:"ChatContent",
  data(){
    return {
     
    }
  },
  methods:{
    applyClick(){
      this.$message("我在该号的申请历史")
    }
  }
}
</script>

<style scoped>
  #ChatContent{
    flex: 80%;
    display: flex;
    flex-direction: column;
    border-left: 3px solid #eee;
    background: #eee;
    position: relative;
  }

  .top_container{
    background: #fff;
    height: 100px;
    position:relative;
    border-bottom: 2px solid #eee;
  }

  .account_box{
    position:absolute;
    top: 10px;
    left: 400px;
    display:flex;
  }

  .account_box img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .account_box span{
    font-size: 18px;
    line-height: 42px;
  }

  .desc_box{
    position: absolute;
    left: 4px;
    bottom: 6px;
  }

  .apply_history{
    position: absolute;
    top: 50px;
    right: 100px;
    cursor: pointer;
    color: #409EFF;
  }

  .chat_msg{
    width: 700px;
    position:absolute;
    left: 40px;
    top: 120px;
  }

  .top_msg{
    margin-bottom: 30px;
    border-bottom: 2px solid #333;
    line-height: 24px;
    font-size: 16px;
  }

  .article_card{
    width: 330px;
    height: 200px;
    border: 1px solid #333;
    padding: 20px;
    font-size: 16px;
    line-height: 20px;
  }

  .article_title{
    font-weight:bold;
    font-size:18px;
    padding-bottom: 4px;
    border-bottom: 1px solid #333;
  }

  .article_desc_container{
    display: flex;
    flex-direction: row;  
    justify-content: space-between;
    margin-top: 10px;
    padding-bottom: 8px;
  }

  .article_desc {
    flex: 70%;
  }

  .article_img{
    flex: 20%;
    width: 80px;
    height: 60px;
  }

  .origin_img{
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .account_desc{
    display: flex;
    padding: 2px 10px;
    text-indent: 8px;
    font-size: 12px;
    line-height: 24px;
    height: 30px;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
  }

  .article_button{
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .el-button{
    color: #fff;
    background: green;
  }

  .bottom_msg{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .article_data{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .article_data_left{
    padding: 20px 10px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .article_data_right{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>