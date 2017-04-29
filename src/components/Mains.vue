<template>
 <div class="mains">
    <div class="layout">
            <div class="layout-header">
                <div class="layout-logo"></div>
                <div class="user-info">
                 <Icon type="person" class="person"></Icon>
                 {{userName}}
                  <a @click="signOut">
                    <Icon type="android-exit" class="exit"></Icon>
                  </a>
                </div>
            </div>
        <div class="content">
        <router-view>
        </router-view>
        </div>
    </div>
   </div>
</template>

<script>

export default {
  name: 'mains',
  data () {
    return {
      userName:"小朴"
    }
  },
  mounted(){

  },
  methods:{
      signOut(){
        sessionStorage.removeItem("user");
        this.$router.push('/');
      }
  }
}
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 10px;
        left: 20px;
    }
    .user-info{
        width: 150px;
        height: 30px;
        float:right;
        position: relative;
        top: 15px;
        right: 20px;
        color:rgba(254, 254, 254, 0.88);
    }
    .person,.exit{
        font-size:22px;
        padding-right:5px;
        position: relative;

        top: 2px;
    }
    .exit{
        position: relative;
        left:5px;
        top: 3px;
    }
    .layout-header{
        height: 50px;
        background-image: linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5);
    }
    .content{
        min-height:calc(100vh - 100px);
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
</style>
