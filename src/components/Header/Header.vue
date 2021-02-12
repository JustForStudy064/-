<template>
  <div id="Header">
    <el-container>
      <el-header>
      <!-- 左侧logo和名字 -->
        <div class="item_logo">
          <img src="@/assets/img/test.jpg" alt="" class="logo_img"/>
          <span class="logo_name">开白小助手 ·</span>
        </div>
        <el-dropdown class="change_user" @command="handleCommand">
          <span class="el-dropdown-link">
            {{act_user[userNum]}}<i class="el-icon-arrow-down el-icon--right" style="text-indent:0;"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="0">申请者端</el-dropdown-item>
            <el-dropdown-item command="1">原创者端</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown class="setting" @command="settingCommand">
          <span class="el-dropdown-link el-icon-setting">
            {{user_name}}<i class="el-icon-arrow-down el-icon--right" style="text-indent:0;"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="0">设置</el-dropdown-item>
            <el-dropdown-item command="1">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      isShow: 0,
      userNum: 0,
      act_user: ["申请者端", "原创者端"],
      user_name: "督督科技",
      change_flag: 0,
    }
  },
  methods:{
    handleCommand(command) {
      if(this.userNum != command){
        this.$emit("changeUser")
        this.userNum = command;
      }
    },
    settingCommand(command){
      this.$message("0暂无, 1退出登录")
      if(command==1){
        setTimeout(()=>{
          this.$router.push("/login")
        })
      }
    }
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #FFF;
    color: #333;
    display: flex;
  }

  .item_logo{
    height: 60px;
    width: 220px;
    padding: 5px;
    position: relative;
  }
  
  /* 左侧logo */
  .logo_img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .logo_name{
    position: absolute;
    line-height: 50px;
    font-size: 25px;
    color: #000;
    right: 0;
  }

  .change_user{
    position: absolute;
    left: 250px;
    top: 25px;
    text-align:center;
    text-indent: 2em;
    font-size:16px;
  }


  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .setting{
    position: absolute;
    top: 30px;
    right: 50px;
  }

  .user_atlas{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

</style>