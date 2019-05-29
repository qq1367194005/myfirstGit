import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

var pathip = 'http://shop.sirentoy.com';
export default {
    // 解决跨域的 vue 请求
    ajax(url,data) {
        return Vue.http.jsonp("http://shop.sirentoy.com/api"+url,{params:data}).then(function(result){
            return result.body;
        }).promise;
    },
    pathip

}

