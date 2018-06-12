<template>
<div>
  <div class="logo">
    <img class="logoImage" src="../images/logo.png">
  </div>

  <div>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <div class="register">
      <el-button type="text" @click="to_register">没有账号?点这里注册</el-button>
    </div>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456',
        },
        retrunUser:[],
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
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
            this.logining = true;
            var params = new URLSearchParams();
            params.append('user_name',this.ruleForm2.account);
            this.$axios.post('http://localhost:8090/user/userLogin.do',params).then(res =>{
                this.retrunUser = res.data.thisUser;
                if(res.data.thisUser.user_pass==this.ruleForm2.checkPass){
                  this.$router.push({ path: '/bookList' });
                }
                else{
                  this.$alert('信息有误', '出错', {
                  confirmButtonText: '确定',
                  });
                }     
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      to_register() {
        this.$router.push({ path: '/register' });
      }
    }
  }

</script>

<style lang="scss" scoped>
  .logoImage{
    width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
    margin: 0 auto;
  }

  .logo{
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

  .login-container {
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