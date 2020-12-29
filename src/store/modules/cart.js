//import {goodsList,getDetail} from '@/api/goodsList'
import { setStore, getStore } from '@/utils/store'

const state = {
    shoppingCart: getStore({name: 'shoppingCart'}) || [],
    newShoppingCart: getStore({name: 'newShoppingCart'}) || [],
}
export const ADD_SHOPPING_CART = (state, data) => {

    state.newShoppingCart = data;
};
const mutations = {
    ADD_SHOPPING_CART: (state, CartInfo) => {
        state.CartInfo = CartInfo
        const item = {
            goods_id: CartInfo.goods_id,
            count: CartInfo.count,
            img: CartInfo.package.img,
            package: CartInfo.package.intro,
            price: CartInfo.package.price,
            title: CartInfo.title
        };
        state.shoppingCart.push(item);
        state.newShoppingCart = CartInfo;
        setStore({
            name: 'shoppingCart',
            content: state.shoppingCart,
            type: 'session',
        })
        setStore({
            name: 'newShoppingCart',
            content: state.newShoppingCart,
            type: 'session',
        })
    },
    DELETE_SHOPPING_CART:(state,index)=>{
        state.shoppingCart.splice(index,1)
        setStore({
            name: 'shoppingCart',
            content: state.shoppingCart,
            type: 'session',
        })
    },
    CLEAR_SHOPPING_CART:(state,)=>{
        state.shoppingCart = []
        state.newShoppingCart = []
        setStore({
            name: 'shoppingCart',
            content: [],
            type: 'session',
        })
        setStore({
            name: 'newShoppingCart',
            content: [],
            type: 'session',
        })
    }



}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
