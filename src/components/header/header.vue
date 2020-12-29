<template>
    <div class="nav">
        <div class="left">
            <div class="first" v-if="!user.userInfo">
                你好，请<router-link to="/login" class="textHover"><i class="el-icon-user-solid"></i>登录 </router-link>
                <span class="noDivider"><router-link to="/register"  class="textHover"><i class="el-icon-box"></i>注册 </router-link></span>
            </div>
            <div v-if="user.userInfo">
                <span class="divider">欢迎您,<i class="el-icon-s-custom"></i>{{user.userInfo.realName}}</span>
                <span class="noDivider" @click="loginOut"><i class="el-icon-switch-button"></i>退出</span>
            </div>
        </div>
        <div class="right">
            <span class="divider"><router-link to="/"><i class="el-icon-s-shop"></i>商城首页</router-link></span>
           
            <span class="divider"><router-link to="/"><i class="el-icon-user-solid"></i>个人中心</router-link></span>
            <el-dropdown>
                <span class="el-dropdown-link noDivider">
                    <router-link to="/shoppingCart"><i class="el-icon-shopping-cart-2"></i>购物车</router-link>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <div class="shopping-cart-null" v-show="cart.shoppingCart.length <= 0">
                        <span>你的购物车没有空空哦</span>
                        <span>赶快去添加商品吧~</span>
                    </div>
                    <div class="shopping-cart-list" v-show="cart.shoppingCart.length > 0">
                        <div class="shopping-cart-box" v-for="(item,index) in cart.shoppingCart" :key="index">
                            <div class="shopping-cart-img">
                                <img :src="require('../../assets'+item.img)">
                            </div>
                            <div class="shopping-cart-info">
                                <div class="shopping-cart-title">
                                    <p>{{item.title.substring(0, 22)}}...</p>
                                </div>
                                <div class="shopping-cart-detail">
                                    <p>
                                        套餐:
                                        <span class="shopping-cart-text">
                          {{item.package}}
                        </span>
                                        数量:
                                        <span class="shopping-cart-text">
                          {{item.count}}
                        </span>
                                        价钱:
                                        <span class="shopping-cart-text">
                          {{item.price}}
                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="go-to-buy">
                            <el-button class="payBtn" size="small" @click="goToPay">
                                去结账
                            </el-button>
                        </div>
                    </div>
                </el-dropdown-menu>
            </el-dropdown>

        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: "headerBox",
        computed: {
            ...mapState(['user', 'cart'])
        },
        methods:{
            goToPay () {
                this.$router.push('/shoppingCart');
            },
            loginOut(){
                this.$store.dispatch("user/LogOut").then(res=>{
                    this.$router.push('/login')
                })
            }
            
        }
    }
</script>

<style scoped>
   
    p{
        margin: 0;
    }
    .nav {
        margin: 0 auto;
        height: 45px;
        line-height: 45px;
        background-color: #e1e1e1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 10%;
        color:#d9534f ;
        margin-bottom: 30px;
    }

    .nav a {
        text-decoration: none;
        color: #999999;
        padding-left: 15px;
        border-right: 1px solid #aaa;
        cursor: pointer;
    }
    .noDivider a {
        border-right: none;
    }
    .nav a:hover {
        color: #d9534f;
    }
  
    .first {
        color: #d9534f;
        
    }
    .first a {
        color: #d9534f;
    }
    .right{
        width: 400px;
    }
    .right span{
    
    }
    .right a{
        padding-right: 15px;
        //display: inline-block;
        color:#d9534f ;
        font-size: 14px;
        
    }
    .right a i{
        font-size: 16px;
    }
    .shopping-cart-list {
        padding: 3px 15px;
    }
    .shopping-cart-box {
        margin: 8px 0px;
        margin-top: 15px;
        padding-bottom: 15px;
        height: 40px;
        display: flex;
        align-items: center;
        border-bottom: 1px #ccc dotted;
    }
    .shopping-cart-box:first-child {
        margin-top: 8px;
    }
    .shopping-cart-img {
        margin-right: 15px;
        width: 40px;
        height: 40px;
    }
    .shopping-cart-img img {
        width: 100%;
    }
    .shopping-cart-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;
        width: 200px;
        overflow: hidden;
        font-size: 12px;
        line-height: 20px;
        color: #999999;
    }
    .shopping-cart-detail {
        color: #999999;
    }
    .shopping-cart-text {
        color: #ccc;
    }
    .go-to-buy {
        display: flex;
        justify-content: flex-end;
    }
    .shopping-cart-null {
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .cart-null-icon {
        font-size: 38px;
        margin-bottom: 15px;
    }
    .shopping-cart-null span {
        color: #999999;
        font-size: 12px;
        line-height: 16px;
    }
    .username-p {
        cursor: pointer;
    }
    .my-page {
        padding: 3px 5px;
        width: 180px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .my-page a {
        margin: 0px;
        padding: 0px;
        border: none;
    }
    .my-info {
        padding: 5px;
        width: 50%;
        height: 100%;
        text-align: center;
        cursor: pointer;
    }
    .my-info:hover {
        box-shadow: 0px 0px 5px #ccc;
    }
    .my-info i {
        font-size: 28px;
    }
    .my-info p {
        font-size: 12px;
    }
    .sign-out {
        padding: 5px;
        width: 50%;
        height: 100%;
        text-align: center;
        cursor: pointer;
    }
    .sign-out:hover {
        box-shadow: 0px 0px 5px #ccc;
    }
    .sign-out i {
        font-size: 28px;
    }
    .sign-out p {
        font-size: 12px;
    }
    .payBtn{
        margin-left: 20px;
        background: #ff4707;
        color: #fff;
    }
</style>
