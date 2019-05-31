<template>
    <div class="art_content">
        <ul class="index_arc">
            <li class="index_arc_item" v-for="item in bloglist" v-bind:key="item.id">
                <a href="#" class="pic">
                    <img class="lazyload" :src="unit.pathip + item.blogimgimage" alt="" />
                </a>
                <h4 class="title">
                    <router-link :to="'/bloginfo/'+item.id">{{item.titletext}}</router-link>
                </h4>
                <div class="date_hits">
                    <span>小七</span>
                    <span>{{item.createtime}}</span>
                    <span><a href="">{{item.classnametext}}</a></span>
                    <p class="hits"><i class="Hui-iconfont" title="点击量">&#xe6c1;</i>{{item.looknumnumber}}  </p>
                    <!-- <p class="commonts"><i class="Hui-iconfont" title="点击量">&#xe622;</i> <span class="cy_cmt_count">20</span></p> -->
                </div>
                <div class="desc">{{item.blogsketch}}</div>
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
            bloglist:[
                {
                    
                }
            ]
        }
    },
    created(){
        this.unit.ajax("/Getbloglist/alllist",{page:1,limit:10}).then((data) => {
            window.console.log(data);
            this.bloglist = data.data;
        })
    },
    methods: {
        
    },
}
</script>

<style>

</style>
