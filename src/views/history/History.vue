<template>
  <div id="History">
    <Header/>
    <el-container>
      <Aside/>
      <el-main>
        <notice-card/>
          <div class="history_box">
            <TabBarList :accountList="accountList" />
            <!-- @alertMessageShow="alertMessageShow" -->
            <Content @settingShow="settingShow"
                     
                     @deleteNotice="deleteNotice"
                     @addClick="addClick"/>
          </div>
      </el-main>
    </el-container>
    <ReprintSet v-show="reprintSetShow" @settingClose="settingClose"/>
    <DeleteNote v-show="deleteShow" @alertMessage="alertMessage"/>
    <Applicant v-show="applicantShow" @addTotalClick="addTotalClick"/>
    <PopLayer v-show="showPop" />
  </div>
</template>

<script>
import Header from "@/components/Header/Header"
import Aside from "@/components/Aside/Aside"
import TabBarList from "@/components/TabBarList/TabBarList"
import NoticeCard from "@/components/NoticeCard/NoticeCard"
import PopLayer from "@/components/PopLayer/PopLayer"

import Content from "./childCpns/Content"
import ReprintSet from "./childCpns/ReprintSet"
import DeleteNote from "./childCpns/DeleteNote"
import Applicant from "./childCpns/Applicant"

export default {
  name: "History",
  components:{
    Header,
    Aside,
    NoticeCard,
    TabBarList,
    Content,
    PopLayer,
    ReprintSet,
    DeleteNote,
    Applicant
  },
  data(){
    return {
      accountList: [{
        "imgUrl":"http://www.chenct.top/group1/M00/00/01/rB6pqWAS7tSAUqBPAABseLpIhbI4406968",
        "name": "公众号名称A",
        "index": "first",
      },{
        "imgUrl":"http://www.chenct.top/group1/M00/00/01/rB6pqWAS7tSAUqBPAABseLpIhbI4406968",
        "name": "公众号名称B",
        "index": "second",
      },{
        "imgUrl":"http://www.chenct.top/group1/M00/00/01/rB6pqWAS7tSAUqBPAABseLpIhbI4406968",
        "name": "公众号名称C",
        "index": "third",
      }],
      reprintSetShow: false,
      showPop: false,
      deleteShow: false,
      applicantShow: false,
    }
  },
  methods:{
    settingClose(){
      this.reprintSetShow = !this.reprintSetShow
      this.showPop = !this.showPop
    },
    settingShow(){
      this.reprintSetShow = !this.reprintSetShow
      this.showPop = !this.showPop
    },
    alertMessage(){
      this.deleteShow = !this.deleteShow
      this.showPop = !this.showPop
    },
    deleteNotice(){
      this.deleteShow = !this.deleteShow
      this.showPop = !this.showPop
    },
    addTotalClick(){
      this.applicantShow = !this.applicantShow
      this.showPop = !this.showPop
    },
    addClick(){
      this.applicantShow = !this.applicantShow
      this.showPop = !this.showPop
    },
  }
}
</script>

<style scoped>
 .el-main{
   padding: 10px;
 }

  .history_box{
    background: #fff;
    margin-top: 10px;
    height: 560px;
    position: relative
  }
</style>