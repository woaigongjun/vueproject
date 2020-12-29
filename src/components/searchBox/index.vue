<template>
    <div class="search" >
        <div class="searchBox">
            <el-input placeholder="搜索" v-model="searchInfo" class="input-with-select">
                <el-button slot="append" class="searchBtn"><i class="el-icon-search"></i></el-button>
            </el-input>
        </div>
        <div class="nav-item">
            <ul>
                <li v-for="(item,index) in nav" :key="index">
                    <a href="#">{{item}}</a>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: "searchBox",
        data(){
            return{
                searchInfo:"",
                nav: [
                    '首页',
                    '闪购',
                    '生鲜',
                    '全球购',
                ],
            }
        }
    }
</script>

<style scoped  lang="scss">
    .search{
        border-bottom:1px solid #ff5a0b;
        margin-bottom: 20px;
    }
    .searchBox{
        width: 50%;
        text-align: center;
        margin: 0 auto;
        .input-with-select{
            border: 1px solid #ff5a0b;
            .el-input--medium .el-input__inner{
                height: 50px!important;
                line-height: 50px !important;
            }
            .el-input-group__append{
                padding: 0 19px;
            }
            .searchBtn{
                background-color: #ff5a0b !important;
                border-radius: 0;
                i.el-icon-search{
                    font-size: 18px!important;
                    color: #fff!important;
                    font-weight: 600;
                }
            }
        }
      
        
    }
    .nav-item {
        width: 680px;
        height: 36px;
        margin: 0px auto;
    }
    .nav-item ul {
        list-style: none;
        margin-left: 15px;
        
    }
    .nav-item li {
        float: left;
        font-size: 16px;
        font-weight: bold;
        margin-left: 30px;
        text-align: center;
    }
    .nav-item a {
        text-decoration: none;
        color: #555555;
    }
    .nav-item a:hover {
        color: #d9534f;
    }
 
   

   
  
</style>
