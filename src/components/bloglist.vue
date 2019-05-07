<template>
    <div class="art_content">
        <ul class="index_arc">
            <li class="index_arc_item">
                <a href="#" class="pic">
                    <img class="lazyload" src="/temp/art.jpg" alt="应该选" />
                </a>
                <h4 class="title">
                    <router-link :to="'/bloginfo/'+id">个人博客应该选择什么样的域名和域名后缀</router-link>
                </h4>
                <div class="date_hits">
                    <span>老王</span>
                    <span>2017-02-24</span>
                    <span><a href="">程序人生</a></span>
                    <p class="hits"><i class="Hui-iconfont" title="点击量">&#xe6c1;</i> 276° </p>
                    <p class="commonts"><i class="Hui-iconfont" title="点击量">&#xe622;</i> <span class="cy_cmt_count">20</span></p>
                </div>
                <div class="desc">不论搭建什么样的网站，选择一个好的域名都是很有必要的，选择一个好的域名对网站的意义也是不言而喻的。每一个网站都有之对应的域名，就像人的名字一样。每个人都想自己有个好听的名字，网站也是一样。一个网站可以有多个域名，但是一个域名只能对应一个网站。&nbsp;一、域名要好记，方便输入&nbsp; &nbsp; &nbsp; &nbsp;域名本身的意义就是为了人们方便记忆才使用的，不然都用IP地址就好了。所以，网站域名一定要选择好记忆的。因为域名是</div>
            </li>
            
            
            <li class="index_arc_item no_pic">
                <h4 class="title">
                    <router-link to="/bloginfo/1">个人博客应该选择什么样的域名和域名后缀</router-link>
                </h4>
                <div class="date_hits">
                    <span>老王</span>
                    <span>2个月前</span>
                    <span><a href="">建站</a></span>
                    <p class="hits"><i class="Hui-iconfont" title="点击量">&#xe6c1;</i> 276 °</p>
                    <p class="commonts"><i class="Hui-iconfont" title="点击量">&#xe622;</i> <span id="sourceId::105" class="cy_cmt_count">20</span></p>
                </div>
                <div class="desc"> 不论搭建什么样的网站，选择一个好的域名都是很有必要的，选择一个好的域名对网站的意义也是不言而喻的。每一个网站都有之对应的域名，就像人的名字一样。每个人都想自己有个好听的名字，网站也是一样。一个网站可以有多个域名，但是一个域名只能对应一个网站。&nbsp;一、域名要好记，方便输入&nbsp; &nbsp; &nbsp; &nbsp;域名本身的意义就是为了人们方便记忆才使用的，不然都用IP地址就好了。所以，网站域名一定要选择好记忆的。因为域名是</div>
            </li>
            
            
        
        </ul>
        <div class="text-c mb-20" id="moreBlog">
            <a class="btn  radius btn-block " href="javascript:;" onclick="moreBlog();">点击加载更多</a>
            <a class="btn  radius btn-block hidden" href="javascript:;">加载中……</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'blogList',
    data(){
        return {
            id:2
        }
    }
}
</script>

<style>

</style>
