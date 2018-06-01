<template>
<div>
  <div class="logo2">
    <img class="logoImage2" src="../images/logo.png">
  </div>

  <div>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container2">
    <h3 class="login_title">用户注册</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass2">
      <el-input type="password" v-model="ruleForm2.checkPass2" auto-complete="off" placeholder="确认密码"></el-input>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <div class="register">
      <el-button type="text" @click="to_register">点这里登录</el-button>
    </div>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">注册</el-button>
    </el-form-item>
  </el-form>
  </div>
</div>
</template>

<script>
  import { requestLogin } from '../api/api';
  //import NProgress from 'nprogress'
  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
        //   account: 'admin',
        //   checkPass: '123456'
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ],
          checkPass2:[
            { required: true, message: '请再次输入密码', trigger: 'blur' },
          ]
        },
        checked: true
      };
    },
    methods: {
      handleSubmit2(ev) {
        var _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            //_this.$router.replace('/table');
            this.logining = true;
            //NProgress.start();
            var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
            // this.$http.post('http://localhost/vueapi/index.php/Home/user/login',data).then((res)=>{
            //   console.log(res)
            if(loginParams.username=='admin'&&loginParams.password=='123456'){
              this.$router.push({ path: '/bookList' });
            }
            else{
                 this.$alert('信息有误', '出错', {
                 confirmButtonText: '确定',
                //  callback: action => {
                //    this.$message({
                //   type: 'info',
                //   // message: `action: ${ action }`
                //   });
                // }
               });
            }

            // requestLogin(loginParams).then(data => {
            //   this.logining = false;
            //   //NProgress.done();
            //   let { msg, code, user } = data;
            //   if (code !== 200) {
            //     this.$message({
            //       message: msg,
            //       type: 'error'
            //     });
            //   } else {
            //     sessionStorage.setItem('user', JSON.stringify(user));
            //     this.$router.push({ path: '/home2' });
            //   }
            // });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      to_register() {
        this.$router.push({ path: '/login' });
      }
    }
  }

</script>

<style lang="scss" scoped>
  .logoImage2{
    width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
    margin: 0 auto;
  }

  .logo2{
    // position: absolute;
    // top: 0px;
    // width: auto;
    width: 100%;
    height: 100px;
    margin: 10px 0 0 0;
    float: left;
    text-align: center;
    overflow: hidden;
    float: left;
  }

  .login-container2 {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 110px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .login_title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }

    .register{
      width: 200px;
      height: 30px;
      margin: 0 auto 10px auto;
      text-align: center;
    }

    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>