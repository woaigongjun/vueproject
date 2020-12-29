import {goodsList,getDetail} from '@/api/goodsList'
import { setStore, getStore } from '@/utils/store'

const state = {
    goodsInfo: getStore({name: 'goodsInfo'}) || {},
}

const mutations = {
    SET_GOODS_INFO: (state, goodsInfo) => {
        state.goodsInfo = goodsInfo
        setStore({
            name: 'goodsInfo',
            content: state.goodsInfo,
            type: 'session',
        })
    },



}

const actions = {
    getGoodsList({
                        commit,
                        state,
                        dispatch,
                    }) {
        return new Promise((resolve, reject) => {
            goodsList().then(response => {
                const data = response.data
                commit('SET_GOODS_INFO', data)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    getGoodsDetail({ commit,
                 state,
                 dispatch,

             },id){
        return new Promise((resolve, reject) => {
            getDetail(id).then(response => {
                const data = response.data
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
