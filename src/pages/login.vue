<template>
    <div >
        <h1>我是login</h1>
        <form>
          <!-- <div class="ipunt-wrap" v-show="admin">
            <label for="ID" class="icon-id"></label>
            <input type="text" id="ID" placeholder="账号" v-model="userid">
          </div> -->
          <div class="ipunt-wrap">
            <label for="username" class="icon-user"></label>
            <input type="text" id="username" placeholder="用户名" v-model="username">
          </div>
          <div class="ipunt-wrap">
            <label for="password" class="icon-password"></label>
            <input type="password" id="password" placeholder="密码" v-model="password">
          </div>
          <div class="button">
            <a class="gv" href="javascript:;" @click="Login()">登录</a>
          </div>
          <!-- <div class="toregist" v-show="customer">
            还没有账号？<router-link to="/regist"><a href="javascript:;">去注册</a></router-link>
          </div> -->
        </form>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'login',
    props: {

		login: {
			type: Boolean
		},
		admin: {
			type: Boolean
		},
		customer: {
			type: Boolean
		}
	},
	data() {
		return {
			username: '',
			password: '',
			userid: '',
			dialog: false,
			dialogMsg: ''
		}
	},

	methods: {
		confirm() {
			this.dialog = false
		},
		back() {
			this.$emit('back')
		},
		Login() {
				if (!this.username || !this.password) {
					alert('请填写完整')
          return
				}
				var user = {
					username: this.username,
					password: this.password
				}
				$.ajax({
					url: '/#/login',
					type: 'post',
					dataType: 'json',
					data: user,
					success: (res) => {
						console.log(res)
						if (res.success) {
							this.username = ''
							this.password = ''
							sessionStorage.id = res.data.uid
							sessionStorage.name = res.data.username
							sessionStorage.phone = res.data.phone
							this.$router.push('/matters')
						} else {
							alert('用户名或密码出错')
						}
					}
				});


		}
	}
}


</script>

<style>
</style>
