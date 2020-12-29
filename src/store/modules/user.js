import {login, logout, register } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
// import {encryption} from '@/utils/index'
import { setStore, getStore, removeStore } from '@/utils/store'

const state = {
    userInfo: getStore({name: 'userInfo'}) || {},
}

const mutations = {
    SET_USER_INFO: (state, userInfo) => {
        state.userInfo = userInfo
        setStore({
            name: 'userInfo',
            content: state.userInfo,
            type: 'session',
        })
    },



}

const actions = {


  loginByUserName({
                        commit,
                        state,
                        dispatch,
                    }, userInfo) {
        // debugger
        return new Promise((resolve, reject) => {
            /*const user = encryption({
             data: userInfo,
             key: 'samssamssamssams',
             param: ['password']
             })*/
            const user = userInfo
            login(user.username, user.password).then(response => {
                const data = response.data
                //setToken(data.token)
                commit('SET_USER_INFO', data)
                // commit('SET_TENANT_ID', data.tenant_id)
                // commit('CLEAR_LOCK')
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    register({ commit,
                 state,
                 dispatch,

             },registerInfo){
        return new Promise((resolve, reject) => {
            register(registerInfo).then(response => {
                const data = response.data
                //setToken(data.token)
                //commit('SET_USER_INFO', data)
                // commit('SET_TENANT_ID', data.tenant_id)
                // commit('CLEAR_LOCK')
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 用户退出
    LogOut({
               commit,
               state,
           }) {
        return new Promise((resolve, reject) => {
            // debugger
            logout().then((response) => {
                  // 清除用户信息
                commit('SET_USER_INFO', null)
                removeToken()
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },


    // remove token
    resetToken({
                   commit,
               }) {
        return new Promise(resolve => {
            commit('SET_ACCESS_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resolve()
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
