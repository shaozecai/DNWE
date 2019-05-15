<template>
    <el-container>
        <img class="logo" src="../../assets/images/logo.png" alt="">
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#105f5f"
        text-color="#fff"
        active-text-color="#ffd04b" v-for="(item) in store.state.menusAll" :key="item.id">
            <!-- 一级导航 -->
            <el-menu-item v-if="!item.subList" v-bind:index="item.id">
                <a :href="item.url">{{item.name}}</a>
            </el-menu-item>
            <!-- 二级导航 -->
            <el-submenu v-if="item.subList" v-bind:index="item.id">
                <template slot="title" v-if="item.url">
                    <a :href="item.url">{{item.name}}</a>
                </template>
                <template slot="title" v-if="!item.url">{{item.name}}</template>
                <div v-for="(item2) in item.subList" :key="item2.id">                 
                    <el-menu-item v-if="!item2.subList" v-bind:index="item2.id">
                        <a :href="item2.url">{{item2.name}}</a>
                    </el-menu-item>
                    <el-submenu v-if="item2.subList" v-bind:index="item2.id">
                        <template slot="title" v-if="item2.url">
                            <a :href="item2.url">{{item2.name}}</a>
                        </template>
                        <template slot="title" v-if="!item2.url">{{item2.name}}</template>
                        <div v-for="(item3) in item2.subList" :key="item3.id">
                            <el-menu-item v-bind:index="item3.id">
                                <a :href="item3.url">{{item3.name}}</a>
                            </el-menu-item>
                        </div>                            
                    </el-submenu>
                </div>
            </el-submenu>

        </el-menu>
    </el-container>
</template>

<script>
    import store from './store'
    console.log(store);
    
    export default
        {
            data() {
                return {
                    activeIndex: '1',
                    store:store
                };
            },
            methods: {
               
                handleSelect(key, keyPath) {
                    console.log(key, keyPath);
                }
            },
            computed:{
                products(){
                    return this.$store;
                }
            },
            created(){
                console.log(this.$store)
            }
        }
</script>

<style scoped>
    .el-container{
        height:60px;
    }
    .el-menu--popup-bottom-start{
        margin-top: 1px;
    }
   .el-menu .el-menu-item a,.el-menu .el-menu-item a:hover,.el-menu .el-menu-item a:active{
        color: #ffffff;
    }
    .el-submenu__title a{
        color: #ffffff;
    }
    .logo{
        width: 52px;
        height: 52px;
        margin-top: 4px;
        margin-right: 20px;
    }
</style>
