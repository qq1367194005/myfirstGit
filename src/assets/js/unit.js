import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
    // 解决跨域的 vue 请求
    ajax(url,data) {
        var returndata;
        Vue.http.jsonp("http://shop.sirentoy.com/api"+url,{params:data}).then(function(result){
            window.console.log(result.body);
            returndata = result.body;
        });
    
        return returndata;
    }
}