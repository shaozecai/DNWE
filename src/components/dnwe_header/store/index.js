/**
 * 定义菜单项
 */
const menuData = [
    {
        id:'F001',
        name:'首页',
        url:'./'
    },
    {
        id:'F002',
        name:'个人中心',
        url:'./main'
    },
    {
        id:'F003',
        name:'管理中心',
        subList:[
            {
                id:'S3001',
                name:'管理1',                
                url:'./manage1'
            },
            {
                id:'S3002',
                name:'管理2',
                url:'./manage2'
            },
            {
                id:'S3003',
                name:'管理3',
                url:'./manage3'
            }
        ]
    },
    {
        id:'F004',
        name:'系统中心',
        subList:[
            {
                id:'S4001',
                name:'系统1',
                subList:[
                    {
                        id:'T4001-001',
                        url:'./system1',
                        name:'选项1'
                    },
                    {
                        id:'T4001-002',
                        url:'./system2',
                        name:'选项2'
                    }
                ]
            },
            {
                id:'S4002',
                name:'系统2',
                url:'./system3',
                subList:[
                    {
                        id:'T4001-001',
                        url:'./system1',
                        name:'选项21'
                    },
                    {
                        id:'T4001-002',
                        url:'./system22',
                        name:'选项22'
                    }
                ]
            },
            {
                id:'S4003',
                name:'系统3',
                url:'./system4'
            }
        ]
    },{
        id:'F005',
        name:'角色管理',
        url:'./user' 
    },{
        id:'F006',
        name:'消息中心',
        url:'./msg' 
    }
];

/**
 * 定义状态信息
 */
const localState = {
    menusAll: menuData
}

/**
 *业务逻辑定义
 */
const mutations = {
    setMenusAll(state,payload){
        state.menusAll = payload
    }
}

/**
 * 业务逻辑处理
 */
const actions = {
    //获取菜单方法
    queryMenus({state,rootState,commit,dispatch},payload){
        commit('setMenusAll', menuData)
    }
}

export default {
    state:localState,
    actions,
    mutations
}