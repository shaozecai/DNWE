/**
 * 公共视图方法
 */
import Vue from 'vue'

export default {
    gotoPage(state,route){
        state.globalRouter = route
    },
    setBreadcrumbs(state,payload){
        state.breadcrumbs = payload
    },
    setPageTitle(state,payload){
        state.pageTitle = payload
    }
}