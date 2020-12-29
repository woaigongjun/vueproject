// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://drrr.com/lounge
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const DollarsHook = function (hooks) {

        this.RealXMLHttpRequest =
            this.RealXMLHttpRequest || window['XMLHttpRequest']
        this.realXMLHttpRequest =
            this.realXMLHttpRequest || new window['XMLHttpRequest']()

        const handler = {
            construct(Target) {
                // console.log('constructor');
                let result  = new Target()
                let returns = new Proxy(result, {
                    get(t, p, r) {
                        const type = typeof t[p]
                        if (type === "function") {
                            return (...args) => {
                                if(hooks[p] ){
                                    console.log("get");
                                    console.log(p);
                                    hooks[p].call(t, ...args)
                                }
                                return t[p].call(t, ...args)
                            }
                        }

                        return t[p]
                    },
                    set(t, p, value, receiver) {
                        let type = typeof t[p]

                        if (type === 'function') {
                            t[p] = () => {
                                if(hooks[p]){
                                    console.log(p);
                                }
                                t[p].call(t, receiver) || value.call(receiver)
                            }
                        } else {
                            t[p] = value
                        }
                        return
                    },
                })

                return returns;
            },
        }

        const proxy = new Proxy(this.RealXMLHttpRequest, handler);

        window.XMLHttpRequest = proxy
    }

    new DollarsHook({
        send() {
            console.log(arguments);
        },
        open() {
            console.log(arguments);
        },
    })
})();
