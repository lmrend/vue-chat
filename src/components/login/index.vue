<template>
  <div class="login-container">
    <!-- 登录 -->
    <el-form class="login-form" v-if="isLoginStatus">
      <div class="avatar ac">
        <el-avatar :size="90">
          <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        </el-avatar>
      </div>
      <el-form-item>
        <el-input autocomplete="new-password" v-model="userLogin.userName" prefix-icon="el-icon-user" placeholder="请输入账号" maxlength="16"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input autocomplete="new-password" type="password" v-model="userLogin.passWord" prefix-icon="el-icon-lock" placeholder="请输入密码" maxlength="16"></el-input>
      </el-form-item>

      <el-form-item class="cv-code">
        <el-input autocomplete="on" class="cv-code-inp" v-model="userLogin.code" prefix-icon="el-icon-lock" placeholder="验证码(不区分大小写)" maxlength="4"></el-input>
        <canvas v-show="!codeing" width="120" height="40" ref="loginCanvas" @click="getCode"></canvas>
        <span style="width: 200px" v-show="codeing">获取中...</span>
      </el-form-item>
      <el-form-item>
        <el-button class="click-btn" type="primary" @click="login">登录</el-button>
        <span class="change-over" style="display: inline" @click="changeStatus(false)">没有账号？去注册</span>
      </el-form-item>
    </el-form>
    <!-- 注册 -->
    <el-form class="register-form" v-if="!isLoginStatus">
      <div class="avatar ac" @click="setShowChooseAvatar(true)">
        <!-- <img :src="avatar" alt="" srcset="" width="100" height="100" style="border-radius: 50%"> -->
        <el-avatar :size="100">
          <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" title="点击切换头像"/>
        </el-avatar>
      </div>
      <el-form-item>
        <el-input autocomplete="new-password" v-model="userRegister.userName" prefix-icon="el-icon-user" placeholder="请输入账号" maxlength="16"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input autocomplete="new-password" type="password" v-model="userRegister.passWord" prefix-icon="el-icon-lock" placeholder="请输入密码" maxlength="16" minlength="6"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input autocomplete="new-password" type="password" v-model="userRegister.repassWord" prefix-icon="el-icon-lock" placeholder="请确认密码" maxlength="16"></el-input>
      </el-form-item>
      <el-form-item class="cv-code">
        <el-input autocomplete="on" class="cv-code-inp" v-model="userRegister.code" prefix-icon="el-icon-lock" placeholder="验证码(不区分大小写)" maxlength="4"></el-input>
        <canvas v-show="true" width="120" height="40" ref="registerCanvas"></canvas>
      </el-form-item>
      <el-form-item>
        <el-button class="click-btn" type="primary" @click="register">注册</el-button>
        <span class="change-over" style="display: inline" @click="changeStatus(true)">已有账号？去登陆</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import img from '@/assets/image/canvas.jpg'
import {createCanvas} from '@/utils/createCode.js'
import {getCode,Login,Register} from '@/api/user'
export default {
  name: "LoginPage",
  data() {
    return {
      userLogin: {
        userName: "",
        passWord: "",
        code: ""
      },
      userRegister: {
        userName: "",
        passWord: "",
        repassWord: "",
        code: ""
      },
      codeing: "true",
      isLoginStatus: true
    }
  },
  methods: {
    //登录
    async login() {
        if(!/^[1-9][0-9]{4,10}$/.test(this.userLogin.userName)){
            return this.$message.error('请输入5-11位数字账号');
        }
        if(!/(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/.test(this.userLogin.passWord)){
            return this.$message.error('密码最少6位，包括至少1个小写字母，1个数字，1个特殊字符');
        }
        try {

            const result = await Login(this.userLogin)
            console.log(result)
            if(result.status == 1001) {
                this.$message.error(result.msg)
                this.userLogin.code = ''
                this.getCode()
            }else if(result.status == 200) {
                this.$message.success(result.msg)
                this.$store.dispatch('login',result)

                this.$router.push('/')
            
            }else if(result.status == 1002) {
                this.$message.error(result.msg)
                this.getCode()
            }else if(result.status == 1003){
                this.$message.error(result.msg)
                this.getCode()
            }
            
        } catch (error) {
            console.log(error)
        }

    },
    //注册
    async register() {
        if(!/^[1-9][0-9]{4,10}$/.test(this.userRegister.userName)){
            return this.$message.error('请输入5-11位数字账号');
        }
        if(!/(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/.test(this.userRegister.passWord)){
            return this.$message.error('密码最少6位，包括至少1个小写字母，1个数字，1个特殊字符');
        }
        if(this.userRegister.passWord !== this.userRegister.repassWord){
            return this.$message.error('两次输入的密码不一致');
        }
        try {
            const result = await Register(this.userRegister)
            console.log(result)
            if(result.status == 1001) {
                this.$message.error(result.msg)
                this.getCode()
            }
            else if(result.status == 1002) {
                this.$message.error(result.msg)
            }
            else if(result.status == 200) {
                this.$message.success(result.msg)
                this.changeStatus(true)
            }
        } catch (error) {
            console.log(error)
        }

    },
    //获取验证码
    async getCode() {
        try {
        this.codeing = true
        const result = await getCode()
        /* let {code} = result */
        this.$nextTick(() => {
            let canvasDom = this.isLoginStatus ? this.$refs.loginCanvas : this.$refs.registerCanvas
            createCanvas(result.code,canvasDom,img,() => {
            this.codeing = false
        })
        })
        } catch (error) {
            console.log(error)
        }

    },
    changeStatus(status) {
        this.isLoginStatus = status
        if(status){
            this.userRegister.passWord = ''
            this.userRegister.userName = ''
            this.userRegister.code = ''
        }else{
            this.userLogin.passWord = ''
            this.userLogin.userName = ''
            this.userLogin.code = ''
        }
        this.getCode()

    }
  },
  mounted() {
    this.getCode()
  }
}
</script>

<style lang="less" scoped>
.login-container {
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("@/assets/image/login.jpg");
  background-repeat: no-repeat center center fixed;
  background-size: cover;
  .login-form,
  .register-form {
    width: 400px;
    background-color: #fff;
    opacity: 0.9;
    padding: 35px 20px 0;
    border-radius: 5px;
  }
  .click-btn {
    width: 100%;
  }
  .change-over:hover{
    color: rgb(19, 132, 202);
    cursor: pointer;
}
canvas{
    box-sizing: border-box;
    margin-top: 10px;
}
}
</style>
