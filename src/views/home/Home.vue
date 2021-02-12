<template>
  <div id="Home">
    <Header @changeUser="changeUser"/>
    <el-container>
      <Aside/>
      <el-main>
        <NoticeCard/>
        <div class="apply_user" v-show="isApply">
          <div class="search_bar_box">
            <SearchBar class="search_bar"/>
          </div>
          <ShowTable @messageShow="messageShow"/>
          <el-pagination class="pagin_nav"
                        background
                        layout="prev, pager, next"
                        :total="1000">
          </el-pagination>
        </div>
        <div class="account_user" v-show="!isApply">
          <TabBarList :accountList="accountList" />
          <div class="search_bar_box" style="height: 40px;">
            <search-bar class="search_bar"/>
          </div>
          <OriginTable/>
          <el-pagination class="pagin_nav"
                        background
                        layout="prev, pager, next"
                        :total="1000">
          </el-pagination>
        </div>
      </el-main>
    </el-container>
    <message-box :articleData="articleData"
                 @closeClick="closeClick"
                 v-show="toApply"/>
    <pop-layer v-show="toApply"/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header"
import Aside from "@/components/Aside/Aside"
import NoticeCard from "@/components/NoticeCard/NoticeCard"
import TabBarList from "@/components/TabBarList/TabBarList"
import SearchBar from "@/components/SearchBar/SearchBar"

import ShowTable from "./childCpns/ShowTable"
import OriginTable from "./childCpns/OriginTable"
import PopLayer from "./childCpns/PopLayer"
import MessageBox from "./childCpns/MessageBox"

export default {
  name:"Home",
  components:{
    Header,
    Aside,
    NoticeCard,
    ShowTable,
    SearchBar,
    TabBarList,
    OriginTable,
    PopLayer,
    MessageBox
  },
  data(){
    return {
      isApply: true,
      accountList:[{
        "imgUrl":"http://www.chenct.top/group1/M00/00/01/rB6pqWAS7tSAUqBPAABseLpIhbI4406968",
        "name": "公众号名称",
        "index": "first",
      },{
        "imgUrl":"http://www.chenct.top/group1/M00/00/01/rB6pqWAS7tSAUqBPAABseLpIhbI4406968",
        "name": "公众号名称",
        "index": "second",
      },{
        "imgUrl":"http://www.chenct.top/group1/M00/00/01/rB6pqWAS7tSAUqBPAABseLpIhbI4406968",
        "name": "公众号名称",
        "index": "third",
      }],
      activeIndex: 0,
      articleData:{},
      toApply: false
    }
  },
  methods:{
    changeUser(){
      this.isApply = !this.isApply
    },
    messageShow(articleObj){
      this.toApply = true
      this.articleData = articleObj
    },
    closeClick(){
      this.toApply = false
    }
  }
}
</script>

<style scoped>
 .el-header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
  }

  .el-main{
    padding: 10px;
  }

  .apply_user{
    background: #fff;
    margin-top: 10px;
    height: 560px;
    position: relative
  }

  .search_bar_box{
    position: relative;
    height: 80px;
  }

  .search_bar{
    position:absolute;
    right: 20px;
    bottom: 10px;
  }

  .pagin_nav{
    position:absolute;
    right:20px;
    bottom: 20px;
  }

  .account_user{
    background: #fff;
    margin-top: 10px;
    height: 560px;
    position: relative
  }

  .account_container{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #fff;
    padding: 10px;
  }

  .account_item{
    width: 15%;
    height: 40px;
    margin-left:10px;
    display: flex;
  }

  .account_item img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .account_item span{
    text-indent: 10px;
    font-size: 16px;
    line-height: 54px;
  }

  .active{
    color: #409EFF;
  }

 
</style>