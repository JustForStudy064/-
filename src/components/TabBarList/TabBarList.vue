<template>
  <div id="TabBarList">
    <el-tabs v-model="activeName" 
            @tab-click="handleClick"
            style="padding-bottom:5px;">
        <el-tab-pane v-for="(item) in accountList" 
                    label="用户管理" 
                    :name="item.index"
                    :key="item.id">
        <div slot="label">
            <div class="item_box">
            <img :src="item.imgUrl" class="atlas_img"/>
            <span>{{item.name}}</span>
            </div>
        </div>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "TabBarList",
  data(){
    return {
      activeName:"first"
    }
  },
  props:{
    accountList:{
      type: Array,
      default(){
        return {}
      }
    }
  },
  methods:{
    handleClick(){
      console.log(this.activeName);
    }
  }
}
</script>

<style scoped>
 #TabBarList{
   margin: 0 20px;
 }

 .atlas_img{
    width:50px;
    height:50px;
    border-radius: 50%;
  }

  .item_box{
    display: flex;
    padding: 10px;
  }

  .item_box span{
    font-size: 16px;
    text-indent: 5px;
    line-height: 50px;
  }
</style>