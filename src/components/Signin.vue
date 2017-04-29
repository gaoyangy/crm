<template>
  <div class="signin">
     <Row class='row'>
        <Col span="8" push="8">
            <div class="sign">
                    <h2 class="login">登 录</h2>
                     <Form ref="formInline" :model="formInline" :rules="ruleInline">
                        <Form-item prop="user" class='form'>
                            <Input type="text" v-model="formInline.user" placeholder="用户名">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </Form-item>
                        <Form-item prop="password" class='form'>
                            <Input type="password" v-model="formInline.password" placeholder="密码">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </Form-item>
                      <Form-item class='form'>
                                <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
                        </Form-item>
                    </Form>
            </div>
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'signin',
  data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
  },
 mounted: function(){
    const user=sessionStorage.getItem('user');
    if(user){
        this.$router.push('/index');
    }
  },
methods:{
       handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        console.log( this.formInline)
                                var self=this;
                                self.$http.post('/api/Account/LoginAccount').then((data)=>{
                                console.log(data)
                                sessionStorage.setItem("user",data.body.Message);
                                self.$Message.success('登录成功!');
                                self.$router.go(0);
                                }).catch((e)=>{
                                    self.$Message.error(e.message);
                                })
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
}
}
</script>

<style scoped>
.row{
    // background:rgba(0,153,229,.4);
    background:#f0f6fa;
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
}
.sign{
    height:320px;
    position:relative;
    top:50%;
    margin-top:160px;
    border-radius:5px;
    padding-top:45px;
    background:#fff;
}
.form{
  margin:30px 80px;
}
.login{
    color:#0084df;
}
</style>
