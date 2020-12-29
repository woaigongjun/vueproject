import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import errorCode from '@/const/errorCode'
import { getStore } from '@/utils/store'
import router from '../router'
import _get from "lodash/get"

const message  = Message
const settings = require("@/settings")
// create an axios instance
const service  = axios.create({
    baseURL: settings.baseURL, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: settings.defaultApiTimeout, // request timeout
})

let msg = undefined
// request interceptor
service.interceptors.request.use(
    config => {

        // 判定如果parameter含有空字符串或者纯空格组成，则忽略
        for (let param in config.params) {
            if (typeof (config.params[param]) === "string" && config.params[param].match(/^\s*$/)) {
                delete config.params[param]
            }
        }
        // do something before request is sent
        if (store.getters.refresh_token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
           // config.headers['Authorization'] = 'Bearer ' + getToken()
            // config.headers['TENANT_ID']     = getStore({name: 'tenant_id'})
        }

        config.validateStatus = status => {
            return status >= 200
        }

        // config.timeout = 3000

        return config
    },
    error => {
        // do something with request error
        return Promise.reject(error)
    },
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        // 处理错误
        const status = response.status

        if (!(status >= 200 && status < 400)) {
            if (status === 401) {
                try {
                    store.commit("http/error_unauthorized", { response })
                } catch (e) {
                    console.error(e);
                }
            }

            if (status === 404) {
                msg = message({
                    message: `${_get(response, "config.url", "")} 404 找不到资源(Not Found)，请联系管理员`,
                    type: 'error',
                    duration: 3 * 1000,
                    onClose() {
                        msg = undefined
                    },
                })
            }

            if (status.toString().match(/50\d/)) {
                msg = message({
                    // message: `${response.config.url} ${status} ${response.data}`,
                    message: `${_get(response, "config.url", "")} 服务器内部错误(Internal Server Error)，请联系管理员`,
                    type: 'error',
                    duration: 3 * 1000,
                    onClose() {
                        msg = undefined
                    },
                })
            }

            // if (parseInt(code) === 401) {
            //   store.dispatch('user/FedLogOut').then(() => {
            //     router.push({ path: '/login' })
            //   })
            // }

            return Promise.reject(response)
        }

        // 处理正确响应
        const res = response.data

        if (response.headers['content-disposition'] && response.headers['content-disposition'].includes("attachment")) {
            return {
                data: res,
                headers: response.headers,
            }
        }

        // if the custom code is not 20000, it is judged as an error.
        if (response.request.responseType === "blob") {
            return res
        }
        if (parseInt(res.code) !== 0) {
            message({
                message: res.message || res.msg || '系统错误，请联系管理员',
                type: 'error',
                duration: 5 * 1000,
            })
            return Promise.reject(res)
        }

        //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //     // to re-login
        //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        //       confirmButtonText: 'Re-Login',
        //       cancelButtonText: 'Cancel',
        //       type: 'warning'
        //     }).then(() => {
        //       store.dispatch('user/FedLogOut').then(() => {
        //         location.reload()
        //       })
        //     })
        //   }
        //   return Promise.reject(new Error(res.message || 'Error'))
        // } else {
        //   return res
        // }

        return res
    },
    error => {
        if (error.code === 'ECONNABORTED' || (error.response && error.response.status === 408)) {
            message({
                message: `${error.config.method.toUpperCase()} ${error.config.url} 响应超时`,
                type: 'error',
                duration: 3 * 1000,
            })
        } else if (error.message === "Network Error") {
            message({
                message: "网络错误，请检查",
                type: 'error',
                duration: 3 * 1000,
            })
        }
        return Promise.reject(error);
    },
)

const request = function (requestConfig) {

    // 拦截重写请求args
    if (requestConfig.query && requestConfig.method === 'get') {

    }
    return service(requestConfig)
}
export default request
