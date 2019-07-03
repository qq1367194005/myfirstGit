<template>
    <div class="myinfo" v-html="config.myinfo">
        
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "aboutme",
    data() {
        return {
            config:[]
        };
    },
    mounted() { 
        this.creatfun();
    },
    methods: {
        creatfun:function(){
            this.unit.ajax("/Getbloglist/getConfig",{}).then((data) => {
                this.config = data.data;
            })
        },
    }
};
</script>

<style scoped>
.myinfo{
    max-width: 1230px;
    margin: 0 auto;
    min-height: 800px;
    margin-top: 10px;
}
</style>