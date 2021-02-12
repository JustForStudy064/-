<template>
  <div id="Content">
    <div class="contentObj">
       <el-menu default-active="1"
                class="el-menu-vertical-demo"
                @select="handleSelect"
                background-color="#fff"
                text-color="#333"
                active-text-color="#00EE76"
                style="height: 450px;">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
           <span slot="title">历史文章</span>
         </el-menu-item>
          <el-menu-item index="2">
           <i class="el-icon-menu"></i>
           <span slot="title">申请者名单</span>
          </el-menu-item>
        </el-menu>
        </div>
        <div class="content_box">
          <HisArticle style="margin-bottom: 20px;" 
                    v-show="showIndex==1 ? true : false" 
                    @settingClick="settingClick"
                    @deleteAlert="deleteAlert"
                    @addAlert="addAlert"/>
          <ApplyList style="margin-bottom: 20px;" v-show="showIndex==2 ? true : false"/>
        </div>
  </div>
</template>

<script>
import HisArticle from "./HisArticle"
import ApplyList from "./ApplyList"

export default {
  name:"Content",
  data(){
    return {
      showIndex: 1
    }
  },
  components:{
    HisArticle,
    ApplyList
  },
  methods:{
    handleSelect(key){
      this.showIndex = key;
    },
    settingClick(){
      this.$emit("settingShow")
    },
    deleteAlert(){
      this.$emit("deleteNotice")
    },
    addAlert(){
      this.$emit("addClick")
    }
  }
}
</script>

<style>
  #Content{
    height:400px;
    background:#fff;
    display: flex;
    flex-direction: row;
  }
 
  .contentObj{
    flex: 15%;
  }

  .content_box{
    flex: 85%;
    margin-left: 20px;
  }

  
</style>