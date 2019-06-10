<template>
  <div>
    <div class="login_m">
      <div class="login_logo">
        <img src="img/logo.png" width="196" height="46">
      </div>
      <div class="login_boder">
        <div class="login_padding" id="login_model">
          <h2>用户名</h2>
          <label>
            <input
              type="text"
              id="username"
              class="txt_input txt_input2"
              placeholder="你的用户名"
              v-model="requestdata.account"
            >
          </label>
          <h2>密码</h2>
          <label>
            <input
              type="password"
              name="textfield2"
              id="userpwd"
              class="txt_input"
              placeholder="******"
              v-model="requestdata.password"
            >
          </label>

          <p class="forgot">
            <a id="iforget" href="javascript:void(0);">忘记密码?</a>
          </p>
          <div class="rem_sub">
            <!-- <div class="rem_sub_l">
              <input type="checkbox" name="checkbox" id="save_me">
              <label for="checkbox">记住我</label>
            </div> -->
            <label>
              <input type="submit"
                class="sub_button"
                name="button"
                id="button"
                value="SIGN-IN"
                style="opacity: 0.7;" @click="login">
            </label>
          </div>
        </div>
        <!--login_padding  Sign up end-->
      </div>
      <!--login_boder end-->
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      requestdata:{
        account:'',
        password:''
      }
    }
  },
  
  mounted:function(){
    this.creatfun();
  },
  methods:{
    creatfun:function(){

    },
    login:function(){
        this.unit.ajax("/user/login",this.requestdata).then((data) => {
            if(data.code!=1){
                alert(data.msg);
            }else{
                // this.unit.userInfo = data.data.userinfo;
                sessionStorage.setItem("username",data.data.userinfo.nickname);
                sessionStorage.setItem("token",data.data.userinfo.token);
                this.$router.push({name:'allblogs'});

            }
        })
    }
  },
};
</script>

<style Lang="css">
@import "/login/style.css";
@import "/login/userpanel.css";
@import "/login/jquery.ui.all.css";
@import "/login/style_log.css";
</style>