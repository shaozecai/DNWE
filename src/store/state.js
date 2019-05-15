/**
 * 公共参数管理
*/
 import Vue from 'vue'

 const states = {
     globalRouter:{url:'',params:{},go:'',replace:false},//url:跳转地址, params:跳转时代的参数,go：在history记录中向前或向后退多少步, replace: 设置为true不会向history添加新纪录
     breadcrumbs:['首页'], //面包屑列表
     pageTitle:'首页',  //页面标题
 }

 export default states