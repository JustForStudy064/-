<template>
  <div id="MessageBox" style="height:530px;">
    <div class="top_content">
      <strong>文章标题:</strong><span>&nbsp;&nbsp;&nbsp;&nbsp;{{articleData.atitle}}</span><br>
      <strong>发布日期:</strong><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{articleData.adate}}</span><br>
      <strong>来源公众号:</strong><span style="text-indent:2em;">&nbsp;&nbsp;{{articleData.account}}</span>
      <img src="@/assets/img/close.png" alt="" class="close_btn" @click="closeClick">
      <span class="check_request">查看转载要求</span>
    </div>
    <div>
      <el-collapse v-model="activeName" accordion style="margin:10px;">
        <el-collapse-item title="申请公众号:督督科技" 
                          v-for="item in apply_data"
                          :key="item.id" 
                          :name="item.id">
          <table>
            <tr>
              <td style="height: 20px;">公众号名称</td>
              <td style="height: 20px;">{{item.name}}</td>
            </tr>
            <tr>
              <td style="height: 20px;">粉丝数量</td>
              <td style="height: 20px;">{{item.fans}}</td>
            </tr>
            <tr>
              <td style="height: 20px;">头条阅读</td>
              <td style="height: 20px;">{{item.readTop}}</td>
            </tr>
            <tr>
              <td>*单钩/双钩</td>
              <td>
                <el-radio v-model="item.hook" label="单钩">单钩</el-radio>
                <el-radio v-model="item.hook" label="双钩">双钩</el-radio>
              </td>
            </tr>
            <tr>
              <td>预览链接</td>
              <td><el-input v-model="item.preview"></el-input></td>
            </tr>
            <tr>
              <td>其他要求</td>
              <td><el-input v-model="item.other"></el-input></td>
            </tr>
          </table>
        </el-collapse-item>
      </el-collapse>
    </div>
      <el-button class="commit_submit" @click="commitApply">提交申请</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '1',
      dheight: 2,
      // articleData:{
      //   atitle: "10万+的网络报文",
      //   adate: "2020-12-01",
      //   account: "督督科技"
      // },
      apply_data: [
        {
          "name": "督督科技",
          "fans": "60,000",
          "readTop": "",
          "hook": "",
          "preview": "",
          "other": ""
        },
        {
          "name": "华南理工大学",
          "fans": "80,000",
          "readContent": "",
          "hook": "",
          "preview": "",
          "other": ""
        }
      ]
    };
  },
  methods: {
    closeClick(){
      this.$emit("closeClick")
    },
    commitApply(){
      this.$message("提交申请成功")
      this.closeClick()
    }
  },
  props:{
    articleData:{
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
  #MessageBox{
    position: absolute;
    top: 15%;
    left: 35%;
    border-radius: 12px;
    background: #fff;
    z-index: 99;
  }

  .top_content{
    font-size: 16px;  
    margin-top: 8px;
    min-height: 100px;
    line-height: 32px;
    padding: 15px 15px 0; 
    width: 500px;
    position: relative;
  }

  .close_btn{
    position: absolute;
    width: 20px;
    height: 20px;
    right: 8px;
    top: 0;
  }

  .check_request{
    position: absolute;
    font-size: 12px;
    color: blue;
    bottom: 5px;
    right:10px;
    cursor: pointer;
  }
  
  .el-collapse-item__content{
    border-radius: 12px;
  }

  .commit_submit{
    background: green;
    color:#fff;
    font-size: 14px;
    padding: 6px 16px;
    position: absolute;
    bottom: 4px;
    left: 40%;
    border-radius: 10px;
  }

  .apply_box{
    background:#eee;
    width: 250px;
    height: 160px;
    padding: 4px;
    display: flex;
    flex-direction: column;
  }

  .apply_item{
    flex:1;
    display: flex;
    justify-content: space-around;
  }

  .apply_item_children{
    flex:1;
  }

  td{
    width: 200px;
    height: 40px;
  }
</style>