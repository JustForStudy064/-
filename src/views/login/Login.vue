<template>
  <div id="Login">
    <com-header/>
    <el-container>
      <el-main>
        <div class="login_container">
          <el-card class="login_box">
            <!-- <div class="login_top_box">
              <span>登录</span>
              <span class="change_login" @click="changeClick">{{loginText}}</span>
            </div> -->
            <div v-show="isCode" class="code_box">
              <div id="qrcode"></div>
            </div>
            <!-- <div v-show="!isCode" class="input_box">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="账号">
                  <el-input v-model="form.name" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>       
                <el-form-item label="验证码">
                  <el-col :span="16" style="padding-right:20px;">
                    <el-input v-model="form.verifyCode" placeholder="请输入验证码"></el-input>
                  </el-col>
                  <el-col :span="8">
                    <img src="@/assets/img/test.jpg" style="width:100%; height:40px;"/>
                  </el-col>
                </el-form-item>
                <el-form-item size="large">
                  <el-button type="primary" @click="onSubmit" class="login_btn">登录</el-button>
                </el-form-item>  
              </el-form>
            </div> -->
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ComHeader from "@/components/ComHeader/ComHeader"

export default {
  name: "Login",
  data(){
    return {
      loginText: "使用账号登录",
      isCode:true,
      form: {
        name: '',
        password: '',
        verifyCode: ''
      } 
    }
  },
  components: {
    ComHeader
  },
  methods:{
    registerNow(){
      this.$router.push({
        path: "/register"
      })
    },
    changeClick(){
      // this.isCode = !this.isCode;
    },
    onSubmit(){
      this.$message("登录成功")
      
    },
    wxlogin() {
      var obj = new WxLogin({
        // 是否开启新页面展示登录二维码
        self_redirect: true,
        // html中要展示二维码的标签id
        id: "qrcode", 
        // 网站应用的AppID
        appid: "wx0ebaf4d987a6f742", 
        scope: "snsapi_login",
        // 回调地址，注意一定要在微信平台下的授权回调域域名下，否则会报redirect_uri错误
        // 且要用encodeURIComponent()方法转码
        // 在此我采用的是自己配置一个wxlogin路由页面做中间页面用于请求后端及结果处理
        redirect_uri: encodeURIComponent(`http://www.dudukeji.net/wxlogin`), 
        // state参数用于二次检验，可自行设置随机字符串等
        state: Math.ceil(Math.random() * 1000),
        style: "black",
      });
    }
  },
  mounted(){
    this.wxlogin()
  },
  watch:{
    $route(to, from){
      if(this.$route.query.code){
        this.$message(this.$route.query.code)
        setTimeout(()=>this.$router.push('/home'), 1000)
      }
      this.$message("发生了变化")
    }
  }
}
</script>

<style scoped>
  .el-main{
    background: #eee;
    padding: 0;
  }

  .login_container{
    height: 700px;
    position: relative;
    background: #333;
  }

  .login_box{
    position: absolute;
    right: 100px;
    width: 450px;
    height: 500px;
    top: 100px;
  }
            
  .login_top_box{
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #333;
  }

  .login_bottom_box{
    text-align: center;
    color: #9A9A9A;
    padding-top: 20px;
    font-size: 14px;
    line-height: 20px;
  }

  .change_login{
    color: #576b95;
    cursor: pointer;
  }

  .code_img{
    width: 200px;
    height: 200px;
  }

  .code_box{
    text-align: center;
    vertical-align: center;
    padding: 40px 0;
  }

  .login_btn{
    width: 150px;
    left: 0;
    position: absolute;
  }

  .input_box{
    padding: 50px 30px 50px 0;
  }
</style>