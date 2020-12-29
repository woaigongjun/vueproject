<template>
  <div class="sassLogin-container">
    <div class="sass-logo"></div>
    <div class="form-container">
      <div class="title">
        <!--欢迎使用-->
        <span class="logo"></span>
        <span class="name">登录</span>
      </div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <div class="login-main">
          <el-form-item prop="username" class="item-bottom">
                        <span class="svg-container">
                          <svg-icon icon-class="login"/>
                        </span>
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="请输入用户名"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="off"
            />
          </el-form-item>
          <el-form-item prop="password" class="item-bottom">
          <span class="svg-container">
            <svg-icon icon-class="passwordline"/>
          </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="请输入密码"
              name="password"
              tabindex="2"
              auto-complete="off"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
          </span>
          </el-form-item>
          <div>
            <el-button type="text" style="float: right" @click="toRegister">去注册</el-button>
          </div>
          <el-button :loading="loading" class="sassButton" @click.native.prevent="handleLogin">登 录</el-button>
        </div>
      </el-form>
    </div>
  
  </div>
</template>

<script>
  import { randomLenNum } from '@/utils/index';
  import { mapGetters } from 'vuex';
  import SvgIcon from '@/components/SvgIcon/index'
  // import { mapActions } from 'vuex'
  export default {
    name: 'Login',
    components:{
      SvgIcon
    },
    data() {
      return {
        loginForm: {
          username: "", // TODO 暂时写死
          password: "",
        },
        loginRules: {
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
        },
        loading: false,
        passwordType: 'password',
        redirect: undefined,
      }
    },

    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = '';
        } else {
          this.passwordType = 'password';
        }
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('user/loginByUserName', this.loginForm).then(
              async res => {
                this.$router.push("/")
              },
              error => {
                this.loading = false
              },
            ).then(response => {
              console.log(response);
            })
          }
        })
      },
      toRegister(){
        this.$router.push('/register')
      }
    },
  }
</script>
<style lang="scss">
  @import "./login.scss";
</style>

