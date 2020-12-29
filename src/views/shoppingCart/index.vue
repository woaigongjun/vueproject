<template>
    <div class="container">
        <header-box></header-box>
        <search-box></search-box>
        <div class="content">
            
            <div class="cartList">
                <el-table
                        :data="cart.shoppingCart"
                        ref="table"
                        border
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="img"
                            label="图片"
                            width="180">
                        <template slot-scope="scope">
                           <img :src="require('../../assets'+scope.row.img)">
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="title"
                            label="商品信息"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="price"
                            label="单价">
                    </el-table-column>
                    <el-table-column
                            prop="count"
                            label="数量">
                        <template slot-scope="scope">
                            <el-input-number v-model="scope.row.count" :min="1" @change="handleChange"  size="small"  label="描述文字"></el-input-number>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="money"
                            label="金额">
                        <template slot-scope="scope">
                           <span>{{scope.row.price*scope.row.count}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, cart.shoppingCart)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="total">
                    <div class="left"><a class="clearCart" @click="clearCart()">清空购物车</a></div>
                    <div class="right">
                        <p class="name">已选商品<span>{{chooseLength}}</span>件</p>
                        <p class="price">合计<span>￥{{totalprice}}</span>元</p>
                       <el-button class="payBtn">去结算</el-button>
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
    import { mapState, mapActions } from 'vuex';
    export default {
        name: "detail",
        components:{
            headerBox,
            FooterBox,
            searchBox,
        },
        computed: {
            ...mapState([ 'cart']),
        },
        data(){
            return{
                chooseLength:0,
                totalprice:0,
                selectData:[],
            
            }
        },
        methods:{
            handleDelete(index,rows){
               // rows.splice(index, 1);
                this.$store.commit('cart/DELETE_SHOPPING_CART',index)
            },
            handleChange(){
                this.totalprice=0;
                this.selectData.forEach(item=>{
                    this.totalprice+= item.count*item.price
                })
            },
            handleSelectionChange(val){
                this.totalprice=0;
                this.chooseLength = val.length;
                this.selectData=val;
                val.forEach(item=>{
                    this.totalprice+= item.count*item.price
                })
            },
            clearCart(){
                this.$store.commit('cart/CLEAR_SHOPPING_CART')
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    @import "./shoppingCart.css";
</style>
