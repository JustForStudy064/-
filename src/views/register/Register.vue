<template>
  <div id="register">
    <ComHeader/>
    <el-container>
      <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="register_title">注册账号</span>
          <el-button type="text" class="to_login" @click="toLogin">去登录</el-button>
        </div>
        <el-form :model="ruleForm" :rules="rules" status-icon label-position="left" ref="ruleForm" label-width="100px" class="form_box">
          <el-form-item label="邮箱地址" prop="e_mail">
            <el-input v-model="ruleForm.e_mail" placeholder="请输入邮箱地址"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="phone">
            <el-col :span="16">
              <el-input v-model="ruleForm.phone" placeholder="请输入手机号码"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button @click="sendIdentifyCode()" :disabled="is_disable">{{ identifyMsg }}</el-button>
            </el-col>
          </el-form-item>
          <el-form-item label="手机验证码" prop="identify_code">
            <el-input v-model="ruleForm.identify_code" placeholder="请输入手机验证码"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input v-model="ruleForm.pass" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input v-model="ruleForm.checkPass" type="password" placeholder="再次输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-col :span="16">
              <el-checkbox label="已阅读并同意用户协议" v-model="isCheck"></el-checkbox>
            </el-col>
            <el-col :span="8">
              <span class="user-pro" @click="toPro">用户协议</span>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" :disabled=!isCheck>注册</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
        </el-card>
     </el-main>
    </el-container>
  </div>
</template>

<script>
import ComHeader from "@/components/ComHeader/ComHeader"

export default {
  name: "Register",
  components:{
    ComHeader,
  },
  data() {
    var validatePass = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请输入密码'));
    } else {
      if (this.ruleForm.checkPass !== '') {
        this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
      return {
        ruleForm:{
          e_mail: '',
          phone: '',
          identify_code: '',
          pass: '',
          checkPass: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          flag: false,
          admit: '',
        },
        rules:{
          e_mail: [
            { required: true,  trigger: 'blur', message: '邮箱地址不能为空'},
            { pattern:/[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '邮箱格式错误', trigger: 'blur' },
          ],
          phone: [
            { required: true,  trigger: 'blur', message: '手机号码不能为空'},
            { pattern:/^1(3|4|5|7|8)d{9}$/, message: '手机号码格式错误', trigger: 'blur' }
          ],
          identify_code: [
            { required: true,  trigger: 'blur', message: '验证码不能为空'},
            { min: 4, max: 4, message: '验证码应为4位', trigger: 'blur' }
          ],
          pass: [
            { required: true,  trigger: 'blur', message: '密码不能为空'},
            { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '长度在 8 到 20 个字符, 并且需要至少包含一个字母和数字', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            { required: true, trigger: 'blur', message: '确认密码不能为空'},
            { validator: validatePass2, trigger: 'blur' }
          ],
          username: [
            { required: true, trigger: 'blur', message: '昵称不能为空'},
            { min: 5, max: 10, messsage: "昵称长度应该为5-10位", trigger:'blur'}
          ]
        },
        delay_time: 60,
        is_disable: false,
        isCheck: false,
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      sendIdentifyCode(){
        /*
          发送验证码：
        */
        if(!this.is_disable){
          this.is_disable = true
          let timer = setInterval(()=>{
            this.delay_time--
            if(this.delay_time === -1){
              this.delay_time = 60
              clearInterval(timer)
              this.is_disable = false
            }
          }, 1000)
        }
      },
      toLogin(){
        this.$router.push({
          path: '/login',
        })
      },
      toPro(){
        this.$message("跳转到协议界面")
      }
    },
    computed:{
      identifyMsg(){ return this.delay_time == 60 ? "发送验证码" : this.delay_time + "s后重发"}
    }
 }
</script>

<style scoped>
  .form_box{
    margin: 20px 18%;
  }

   .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 50%;
    margin: 40px 25%;
    text-align:center;
    border-radius: 5%;
    position: relative;
  }

  .register_title{
    font-size: 20px;
  }

  .to_login{
    position: absolute;
    top: 10px;
    right: 40px;
  }

  .user-pro{
    color: #296bef;
    cursor: pointer;
    border-bottom: 1px solid #296bef;
  }
</style>