<template>
  <div id="DeleteNote">
    <h2>删文提醒</h2>
    <el-input type="textarea" 
              style="width: 400px;padding-top:40px;" 
              placeholder="请输入删文提醒内容"
              v-model="alertMessage"
              :rows="6"></el-input>
    <div style="text-align:center;padding: 10px 0;">
      <el-button type="primary"
                @click="stopReprint">提醒停止转载
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name:"DeleteNote",
  data(){
    return{
      alertMessage: ""
    }
  },
  methods: {
    stopReprint(){
      console.log("test")
      this.$emit("alertMessage", this.alertMessage)
    }
  }
}
</script>

<style>
 #DeleteNote{
    position:absolute;
    left: 30%;
    top: 200px;
    padding: 20px;
    height: 300px;
    border-radius: 10px;
    width:600px;
    background:#fff;
    text-align: center;
    z-index: 99;
 }
</style>