<template>
  <div id="ReprintSet">
    <div class="close_btn">
      <img src="@/assets/img/close.png" alt="" @click="closeClick">
    </div>
    <h2 style="text-align:center;">转载权限设置</h2>
    <div class="normal_container" style="margin-top:10px;">
      <span style="font-size:4px;">* 文章标题、日期、来源公众号系统自动识别，无需申请者填写</span>
      <div class="power_container">
        <div style="flex: 20%"><strong>转载权限：</strong></div>
        <div class="power_item_container">
          <div>
            <span>头条阅读：</span>
            <el-input v-model.number="minRead" size="mini"/> ——  <el-input v-model.number="maxRead" size="mini"/>
            <el-switch v-model="fansValue"
                        active-text="必填"
                        inactive-text="非必填"
                        active-color="#13ce66">
            </el-switch>
          </div>
          <div>
            <span>粉丝数量：</span>
            <el-input v-model.number="minFans" size="mini"/> —— <el-input v-model.number="maxFans" size="mini"/>
            <el-switch v-model="readValue"
                        active-text="必填"
                        inactive-text="非必填"
                        active-color="#13ce66">
            </el-switch>
          </div>
          <div>
            <div>转载注明：</div>
            <el-input type="textarea" v-model="noteDesc" style="width: 300px;"></el-input>
            <el-switch v-model="noteValue"
                        active-text="必填"
                        inactive-text="非必填"
                        active-color="#13ce66">
            </el-switch>
          </div>
          <div>
            <span>阅览链接：</span>
            <el-switch v-model="preView"
                        active-text="必填"
                        inactive-text="非必填"
                        active-color="#13ce66">
            </el-switch>
          </div>
          <div>
            <span>付费转载：</span>
            <el-switch v-model="payReprint"
                        active-text="必填"
                        inactive-text="非必填"
                        active-color="#13ce66">
            </el-switch>
            <div>
              <el-input v-model.number="money" size="mini"/> 元/篇 单钩文章 &nbsp;&nbsp;&nbsp;&nbsp;  
              <span style="color: blue;cursor:pointer">绑定收款用户</span>
            </div>
          </div>
          <div>
            <span>其他要求：</span>
            <el-switch v-model="otherFlag"
                        active-text="必填"
                        inactive-text="非必填"
                        active-color="#13ce66">
            </el-switch>
            <el-input v-model="otherValue" type="textarea" size="mini" placeholder="请输入其他要求"/>
          </div>
        </div>
      </div>
      <div class="area_pri">
        <div style="flex: 20%"><strong>授权范围：</strong></div>
        <div style="flex: 80%">
          <el-input v-model="scopeArea" type="textarea" size="mini" style="width: 300px;" placeholder="请输入授权范围"></el-input>
          <el-switch v-model="scopeFlag"
                    active-text="必填"
                    inactive-text="非必填"
                    active-color="#13ce66">
          </el-switch>
        </div>
      </div>
      <div class="area_pri">
        <div style="flex: 20%"><strong>申请次数</strong></div>
        <div style="flex: 80%">
          <div style="display: flex; flex-direction: column;">
            <span>每人每天最多申请<el-input v-model="articleCount" type="number" size="mini" style="width: 30px;" />篇文章</span>
            <span>每人每天最多申请<el-input v-model="account" type="number" size="mini" style="width: 30px;"/>个号</span>
          </div>
          <!-- <el-switch v-model="noteValue"
                    active-text="必填"
                    inactive-text="非必填"
                    active-color="#13ce66">
          </el-switch> -->
        </div>
      </div>
      <div class="area_pri">
        <div style="flex: 20%"><strong>开白时间</strong></div>
        <div style="flex: 80%">
          <!-- <el-switch v-model="noteValue"
                    active-text="必填"
                    inactive-text="非必填"
                    active-color="#13ce66">
          </el-switch> -->
          <el-input placeholder="请输入开白时间" 
                    style="width:200px;"
                    v-model="openTime"></el-input>
        </div>
      </div>
        <div class="area_pri">
        <div style="flex: 20%"><strong>开放转载时间</strong></div>
        <div style="flex: 80%;display:flex;flex-direction:column;">
          <el-radio v-model="radio" label="1">新文章发布&nbsp;<input type="number" :disabled="radio!=1?true:false"/>&nbsp;天后</el-radio>
          <el-radio v-model="radio" label="2">新文发布后，&nbsp;当天&nbsp;可转载</el-radio>
        </div>
      </div>
      <div style="text-align: center;">
        <el-button type="primary" @click="summitClick">提交申请</el-button>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "ReprintSet",
  data(){
      return {
        fansValue: true,
        minFans: "",
        maxFans: "",
        readValue:true,
        minRead: "",
        maxRead: "",
        noteValue: true,
        noteDesc: "",
        openTime: "",
        preView: "",
        payReprint: "",
        otherFlag: true,
        otherValue: "",
        radio: "1",
        money: "",
        scopeFlag: true,
        scopeArea: "",
        articleCount: "1",
        account: "",
        noteValue: ""
      }
  },
  methods:{
    summitClick(){
      this.$emit("settingClose")
      this.$message("点击了提交申请")
    },
    closeClick(){
      this.$message("关闭了窗口")
      this.$emit("settingClose")
    }
  }
}
</script>

<style scoped>
 #ReprintSet{
    position: absolute;
    left: 32%;
    top: 30px;
    padding: 5px 20px 20px;
    height: 650px;
    width: 600px;
    background: white;
    border-radius: 10px;
    z-index: 99;
    font-size: 14px;
    line-height: 20px;
 }

 .close_btn{
   text-align: right;
   height: 20px;
 }

 .close_btn img{
   width: 20px;
   height: 20px;
 }

 .power_container{
    display: flex;
    flex-direction: row;
    font-size: 14px;
    margin-top: 6px;
    margin-bottom: 10px;
 }

  .power_item_container{
    flex: 80%;
    display: flex;
    flex-direction: column;
    line-height: 28px;
  }

  .el-input{
    width: 80px;
    font-size: 8px;
  }

  input{
    width: 40px;
  }

  .area_pri{
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }
</style>