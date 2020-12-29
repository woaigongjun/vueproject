<template>
    <div>
        <div class="nav-body">
            <!-- 侧边导航 -->
            <el-card class="nav-side" ref="navSide">
                <ul>
                    <li v-for="(item,index) in tags" @mouseenter="showDetail(index)" @mouseleave="hideDetail()">
                        <span class="nav-side-item">{{item}}</span>
                    </li>
                </ul>
            </el-card>
            <div class="nav-content">
<!--                 幻灯片 -->
                <div>
                    <el-carousel :interval="1000" arrow="always" height="485px">
                        <el-carousel-item v-for="(item,index) in images" :key="index">
                            <img :src="require('../../assets/img' + item.src)" style="height: 100%;">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="detail-item-panel panel-1" :duration="{ enter: 100, leave: 100 }" v-show="isShow" @mouseenter="showDetail()" ref="itemPanel1" @mouseleave="hideDetail()">
                <div class="nav-detail">
                    <span>{{tags[tagIndex]}}</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    // import store from '@/store';
    // import { mapState } from 'vuex';
    
    export default {
        name: 'MenuBox',
        data () {
            return {
                isShow: false,
                tagIndex:null,
               
                tags:['手机','电脑','家居','服装','生活','化妆'],
                images:[
                    {
                        name:'图1',
                        src:'/nav/1.jpg'
                    },
                    {
                        name:'图2',
                        src:'/nav/2.jpg'
                    },
                    {
                        name:'图3',
                        src:'/nav/3.jpg'
                    },
                    {
                        name:'图4',
                        src:'/nav/4.jpg'
                    },
                    {
                        name:'图5',
                        src:'/nav/5.jpg'
                    }
                ]
            };
        },
        methods: {
            showDetail (index) {
                this.isShow=true;
                this.tagIndex=index
            },
            hideDetail () {
                this.isShow=false;
                this.tagIndex=null
            }
        },
    };
</script>

<style scoped>

    /*大的导航信息，包含导航，幻灯片等*/
    .nav-body {
        width: 1020px;
        height: 485px;
        margin: 0px auto;
    }
    .nav-side {
        width: 160px;
        height: 100%;
        padding: 0px;
        color: #333;
        float: left;
        background-color: #fff;
    }
    .nav-side ul {
        width: 100%;
        padding: 0px;
        list-style: none;
    }
    .nav-side li {
        padding: 7.5px;
        font-size: 24px;
        line-height: 70px;
        text-align: center;
    }
    .nav-side-item:hover {
        cursor: pointer;
        color: #c81623;
    }
    
    /*导航内容*/
    .nav-content {
        width: 792px;
        margin-left: 15px;
        overflow: hidden;
        float: left;
        text-align: left;
    }

    /*显示商品*/
    .content {
        width: 100%;
    }
    /*显示商品详细信息*/
    .detail-item-panel {
        width: 815px;
        height: 485px;
        background-color: #fff;
        position: absolute;
        top: 0px;
        left: 162px;
        z-index: 999;
        text-align: left;
    }
    .nav-detail {
       font-size: 30px;
        color: #333;
        text-align: center;
        line-height: 485px;
  
    }
    .nav-detail-item span {
        padding: 6px;
        padding-left: 12px;
        margin-left: 15px;
        font-size: 12px;
        background-color: #6e6568;
    }
    .nav-detail-item span:hover {
        margin-left: 15px;
        background-color: #f44336;
    }
    .detail-item-panel ul {
        list-style: none;
    }
    .detail-item-panel li {
        line-height: 38px;
    }

    .detail-item-row a {
        color: #555555;
    }

</style>
