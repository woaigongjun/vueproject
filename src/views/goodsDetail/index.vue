<template>
    <div class="container">
        <header-box></header-box>
        <search-box></search-box>
        <div class="content">
           
            <div class="item-detail-show">
                <div class="item-detail-left">
                    <div class="item-detail-big-img">
                        <pic-zoom :url="require('../../assets'+detailInfo.goodsImg[imgIndex])" alt="" :scale="3"></pic-zoom>
                    </div>
    
                    <div class="item-detail-img-row">
                        <div class="item-detail-img-small" v-for="(item, index) in detailInfo.goodsImg" :key="index" @mouseover="showBigImg(index)">
                            <img :src="require('../../assets'+item)" alt="">
                        </div>
                    </div>
                </div>
                <div class="item-detail-right">
                    <div class="item-detail-title">
                        <p>
                            <span class="item-detail-express">校园配送</span> {{detailInfo.name}}</p>
                    </div>
                    <div class="item-detail-tag">
                        <p>
                            <span v-for="(item,index) in detailInfo.tags" :key="index">【{{item}}】</span>
                        </p>
                    </div>
                    <div class="item-detail-price-row">
                        <div class="item-price-left">
                            <div class="item-price-row">
                                <p>
                                    <span class="item-price-title">B I T 价</span>
                                  <span class="item-price">￥{{price.toFixed(2)}}</span>
                                </p>
                            </div>
                            <div class="item-price-row">
                                <p>
                                    <span class="item-price-title">优 惠 价</span>
                                    <span class="item-price-full-cut" v-for="(item,index) in detailInfo.discount" :key="index">{{item}}</span>
                                </p>
                            </div>
                            <div class="item-price-row">
                                <p>
                                    <span class="item-price-title">促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                                    <span class="item-price-full-cut" v-for="(item,index) in detailInfo.promotion" :key="index">{{item}}</span>
                                </p>
                            </div>
                        </div>
                        <div class="item-price-right">
                            <div class="item-remarks-sum">
                                <p>累计评价</p>
                                <p>
                                    <span class="item-remarks-num">{{detailInfo.remarksNum}} 条</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 选择颜色 -->
                    <div class="item-select">
                        <div class="item-select-title">
                            <p>选择颜色</p>
                        </div>
                        <div class="item-select-column">
                            <div class="item-select-row" v-for="(items, index) in detailInfo.setMeal" :key="index">
                                <div class="item-select-box" v-for="(item, index1) in items" :key="index1" @click="select(index, index1)" :class="{'item-select-box-active': ((index * 3) + index1) === selectBoxIndex}">
                                    <div class="item-select-img">
                                        <img :src="require('../../assets'+item.img)" alt="">
                                    </div>
                                    <div class="item-select-intro">
                                        <p>{{item.intro}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 白条分期 -->
                    <div class="item-select">
                        <div class="item-select-title">
                            <p>白条分期</p>
                        </div>
                        <div class="item-select-row">
                            <div class="item-select-class" v-for="(item,index) in hirePurchase" :key="index">
                                <el-tooltip :content="item.tooltip" placement="top-start">
                                    <span>{{item.type}}</span>
                                </el-tooltip>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="add-buy-car-box">
                        <div class="add-buy-car">
                            <el-input-number :min="1" v-model="count" size="large"></el-input-number>
                            <div class="cartBtn">
                                <el-button class="addCartBtn" @click="addShoppingCartBtn()">加入购物车</el-button>
                                <transition name="shop_cart">
                                    <img class="add_img" v-if="addShow" :src="require('../../assets/img/common/dott.png')" alt="">
                                </transition>
                            </div>
                      
                        </div>
                    </div>
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
    import PicZoom from 'vue-piczoom'
    export default {
        name: "detail",
        components:{
            headerBox,
            FooterBox,
            searchBox,
            PicZoom
        },
        computed: {
            hirePurchase () {
                const three = this.price * this.count / 3;
                const sex = this.price * this.count / 6;
                const twelve = this.price * this.count / 12 * 1.0025;
                const twentyFour = this.price * this.count / 24 * 1.005;
                return [
                    {
                        tooltip: '无手续费',
                        type: '不分期'
                    },
                    {
                        tooltip: '无手续费',
                        type: `￥${three.toFixed(2)} x 3期`
                    },
                    {
                        tooltip: '无手续费',
                        type: `￥${sex.toFixed(2)} x 6期`
                    },
                    {
                        tooltip: '含手续费：费率0.25%起，￥0.1起×12期',
                        type: `￥${twelve.toFixed(2)} x 12期`
                    },
                    {
                        tooltip: '含手续费：费率0.5%起，￥0.1起×12期',
                        type: `￥${twentyFour.toFixed(2)} x 24期`
                    }
                ];
            }
        },
        data(){
            return{
                detailInfo:{},
                id:null,
                imgIndex:0,
                price: 28,
                count: 1,
                selectBoxIndex: 0,
                addShow: false
            }
        },
        methods:{
            getDetail(id){
                this.$store.dispatch("goods/getGoodsDetail",{id:id}).then(res=>{
                    this.detailInfo=res.data;
                })
            },
            showBigImg (index) {
                this.imgIndex = index;
            },
            select (index1, index2) {
                this.selectBoxIndex = index1 * 3 + index2;
                this.price = this.detailInfo.setMeal[index1][index2].price;
            },
            addShoppingCartBtn () {
                this.addShow = true
                const index1 = parseInt(this.selectBoxIndex / 3);
                const index2 = this.selectBoxIndex % 3;
                const data = {
                    goods_id: this.$route.query.id,
                    title: this.detailInfo.name,
                    count: this.count,
                    package: this.detailInfo.setMeal[index1][index2]
                };
                this.$store.commit('cart/ADD_SHOPPING_CART', data)
                setTimeout(() => {
                    this.addShow = false
                }, 1000)
              
            }
        },
        mounted() {
            this.getDetail(this.$route.query.id);
            this.select(0,0)
           // this.price = this.detailInfo.setMeal[0][0].price;
        }
    }
</script>

<style scoped>
@import "./goods.css";
</style>
