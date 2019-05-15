import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const home = function(r){
  require.ensure([],()=>{
    r(require('@/modules/home'))
  },'home')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  }
]



export default new Router({
  routes
})
