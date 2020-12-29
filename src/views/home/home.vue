<template>
    <div class="container">
        <header-box></header-box>
        <search-box></search-box>
        <div class="content">
          
            <div class="top-menu">
                <el-row>
                    <el-col :span="20">
                        <menu-box></menu-box>
                    </el-col>
                    <el-col :span="4">
                       <div class="info">
                            <h4 class="title">商城头条</h4>
                           <div class="userInfo">
                                <div class="" style="margin-bottom: 10px">
                                    <img class="avater" :src="avater">
                                    <div class="loginInfo" >
                                        <p class="nameInfo">Hi,{{user.userInfo?user.userInfo.realName:'游客'}}</p>
                                        <p class="moreInfo">点击更多查看优惠活动</p>
                                    </div>
                                </div>
                               <el-button class="orgBtn">登录</el-button>
                               <el-button class="orgBtn">注册</el-button>
                           </div>
                           <ul class="message">
                               <li class="message-item">[特惠]商城商品1元秒杀</li>
                               <li class="message-item">[公告]商城与长春市签署</li>
                               <li class="message-item">[特惠]洋河年末大促，低至</li>
                               <li class="message-item">[公告]华北，华中部分地区</li>
                               <li class="message-item">[特惠]商城商品1元秒杀</li>
                               <li class="message-item">[公告]讲点狂欢千亿礼券</li>
                           </ul>
                       </div>
                    </el-col>
                </el-row>
             
            </div>
            <!-- 猜你喜欢 -->
            <div class="guess">
                <!-- 头部 -->
                <div class="topHeader">
                   <h5>猜你喜欢</h5>
                </div>
                <!-- 内容 -->
                <div class="guess-content">
                    <el-row :gutter="20" >
                        <el-col :span="6" v-for="(item,index) in goodsList" :key="item.id" style="margin-bottom: 20px" >
                            <el-card >
                                <a @click="toDetail(item.id)">
                                    <img class="goodImg" :src="require('../../assets' + item.src)">
                                    <p class="goodTitle">{{item.name}}</p>
                                    <p class="priceItem"><span class="price">￥<i class="priceNum">{{item.price}}</i></span><el-button type="info" class="simBtn">看相似</el-button></p>
                                </a>
                                
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <!-- 置顶按钮-->
                <div class="toTop">
                    <a href="javascript:;" @click="toTop"><i class="el-icon-upload2"></i></a>
                </div>
            </div>
        </div>
            <footer-box></footer-box>
       
    </div>

</template>

<script>
     import headerBox from "@/components/header/header"
    import FooterBox from "@/components/footer/Footer"
    import searchBox from "@/components/searchBox"
     import MenuBox from "@/components/menu"
     import avater from '@/assets/img/common/avater.png'
     import { mapState, mapActions } from 'vuex';
    export default {
        name: "home",
        components:{
            headerBox,
            FooterBox,
            searchBox,
            MenuBox
        },
        computed: {
            ...mapState(['user'])
        },
        data(){
            return{
                avater:avater,
                goodsList:[]
            }
        },
        methods:{
             getGoodsList(){
                this.$store.dispatch('goods/getGoodsList').then(
                    async res => {
                        this.goodsList=res.data
                    },
                    error => {
                        this.loading = false
                    },
                ).then(response => {
                    console.log(response);
                })
            },
            toTop(){
                window.scrollTo(0,0);
            },
            toDetail(id){
                 this.$router.push({
                     path:'/detail',
                     query:{
                         id:id
                }
                 })
            }
            
        },
        mounted() {
            this.getGoodsList()
        }
    }
</script>

<style scoped>
    @import "./home.css";
</style>
