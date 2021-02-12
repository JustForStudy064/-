<template>
  <div id="ChatObjItem" :class="{active: activeNum == itemObj.order}"  @click="itemActive(itemObj)">
    <img src="@/assets/img/test.jpg" alt="" class="item_img">
    <div class="obj_item">
      <el-badge :value="itemObj.count"  v-show="itemObj.count!=0" style="width:90%;">
        <div style="font-size:16px;text-indent: 10px;width:80%;">{{itemObj.name}}</div>
      </el-badge>
      <div v-show="itemObj.count==0" style="font-size:16px;text-indent: 10px;width:80%;">{{itemObj.name}}</div>
      <div class="item_desc">{{itemObj.desc}}</div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";

export default {
  name: "ChatObjItem",
  data(){
    return {
      activeNum: 0,
    }
  },
  props:{
    itemObj:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    itemActive(itemObj){
      EventBus.$emit("aMsg", itemObj);
      this.itemObj.count = 0;
    }
  },
  mounted(){
    EventBus.$on("aMsg", (itemObj) => {
      // A发送来的消息
      this.activeNum = itemObj.order
    });
  }
}
</script>

<style scoped>
#ChatObjItem{
  border-bottom: 2px solid #eee;
  height: 60px;
  overflow:hidden;
  padding: 5px;
  display: flex;
}

.item_img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.obj_item{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 10px;
}

.item_desc{
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-indent: 10px;
}

.active{
  background: #eee;
}

.message_notice{
  position: absolute;
  right: 5px;
  top: 2px;
  background: #f56c6c;
  text-align: center;
  vertical-align: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 12px;
  color: #fff;
}
</style>