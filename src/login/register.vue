<template>
    <div class="sassLogin-container">
        <div class="sass-logo"></div>
        <div class="form-container">
            <div class="title">
                <!--欢迎使用-->
                <span class="logo"></span>
                <span class="name">注册</span>
            </div>
            <el-form
                    ref="registerForm"
                    :model="registerForm"
                    :rules="registerRules"
                    class="login-form"
                    auto-complete="on"
                    label-position="left"
            >
                <div class="login-main">
                    <el-form-item prop="email" class="item-bottom">
                        <el-input
                                ref="email"
                                v-model="registerForm.email"
                                placeholder="请输入邮箱"
                                name="email"
                                type="text"
                        />
                    </el-form-item>
                    <el-form-item prop="password" class="item-bottom">
                        <el-input
                                ref="password"
                                v-model="registerForm.password"
                                placeholder="请输入密码"
                                name="password"
                                type="password"
                        />
                    </el-form-item>
                    <el-form-item prop="confirmPassword" class="item-bottom">
                        <el-input
                                ref="confirmPassword"
                                v-model="registerForm.confirmPassword"
                                placeholder="请确认密码"
                                type="password"
                                name="confirmPassword"
                                auto-complete="off"
                        />
                    </el-form-item>
                    <el-form-item prop="phone" class="item-bottom">
                        <el-input
                                type="text"
                                ref="phone"
                                v-model="registerForm.phone"
                                placeholder="请输入手机号"
                        />
                    </el-form-item>
                    <el-form-item prop="check" class="item-bottom">
                        <el-checkbox label="点击表示你同意商城服务协议" v-model="registerForm.check" name="type"></el-checkbox>
                       <el-button type="text" style="float: right" @click="toLogin">登录</el-button>
                    </el-form-item>
                    <el-button :loading="loading" class="sassButton" @click.native.prevent="handleRegister">注  册</el-button>
                </div>
            </el-form>
        </div>
    
    </div>
</template>

<script>
    export default {
        name: 'register',
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    // if (this.registerForm.password !== '') {
                    //     this.$refs.registerForm.validateField('password');
                    // }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.registerForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                registerForm: {
                    email: "", // TODO 暂时写死
                    password: "",
                    confirmPassword: '',
                    phone: '',
                    check:false
                },
                registerRules: {
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur']}
                    ],
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    confirmPassword: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    phone:[
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        // { type: 'email', message: '请输入正确的手机号', trigger: ['blur', 'change']}
                    ]
                },
                loading: false,
                redirect: undefined,
            }
        },
        watch: {
            $route: {
                handler: function (route) {
                    this.redirect = route.query && route.query.redirect
                },
                immediate: true,
            },
        },
        methods: {
            handleRegister() {
                this.$refs.registerForm.validate(valid => {
                    if (valid) {
                        this.loading = true
                        this.$store.dispatch('user/register', this.loginForm).then(
                            async res => {
                                this.$message({
                                    message: '注册成功!跳转登录页面登录',
                                    type: 'success'
                                });
                              this.$nextTick(()=>{
                                  this.$store.push("/login")
                              })
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
            toLogin(){
                this.$router.push('/login')
            }
        },
    }
</script>
<style lang="scss">
    @import "./login.scss";
    .login-main{
        padding: 25px 55px!important;
        height: 450px;
    }
    .sassButton{
        margin-top: 10px!important;
    }
</style>

