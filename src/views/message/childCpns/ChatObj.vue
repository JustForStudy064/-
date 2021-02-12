<template>
  <div id="ChatObj">
    <div class="message" @click="clickRead">
      <i class="el-icon-discover">&nbsp;</i>消息互动
    </div>
    <div v-for="item in chatObj"
         :key="item.id">
      <chat-obj-item :itemObj="item"/>
    </div>
  </div>
</template>

<script>
import ChatObjItem from "./ChatObjItem"

export default {
  name: "ChatObj",
  data(){
    return {
      isExist: true,
      chatObj:[
        {
          order: 0,
          name:"公众号名称A",
          desc:"这里是消息摘要，选择比较重要的信息发过来就可",
          count:0,
        },{
          order: 1,
          name:"公众号名称B",
          desc:"这里是消息摘要，选择比较重要的信息发过来就可",
          count:1,
        },{
          order: 2,
          name:"公众号名称C",
          desc:"这里是消息摘要，选择比较重要的信息发过来就可",
          count:25,
        },{
          order: 3,
          name:"公众号名称D",
          desc:"这里是消息摘要，选择比较重要的信息发过来就可",
          count:12,
        },{
          order: 4,
          name:"公众号名称E",
          desc:"这里是消息摘要，选择比较重要的信息发过来就可",
          count:0,
        },
      ]
    }
  },
  components:{
    ChatObjItem
  },
  methods:{
    clickRead(){
      this.isExist = false
    },
    itemActive(){
      console.log("test")
    }
  }
}
</script>

<style scoped>
 #ChatObj{
  flex:20%;
  background: #fff;
 }

 .atlas_img{
  width: 25px; 
  height: 25px;
  border-radius: 50%;
 }

 .message{
  padding: 10px 50px 0;
  margin-bottom: 10px;
  text-align: center;
 }
 
 .message_card{
    cursor: pointer;
 }
</style>