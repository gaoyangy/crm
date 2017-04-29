<template>
  <div id="app">
    <mains v-if="signIn"></mains>
    <signin v-if="signOut"></signin>
  </div>
</template>

<script>
import mains from './components/Mains.vue'
import signin from './components/Signin.vue'
export default {
  name: 'app',
  data(){
    return{
         signIn:false,     
         signOut:true
    }
  },
  components: { mains,signin },
 mounted: function(){
    const user=sessionStorage.getItem('user');
    if(user){
        this.signIn=true;
        this.signOut=false;
        this.$router.push('/index');
    }
  },
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#eee;
}
</style>
