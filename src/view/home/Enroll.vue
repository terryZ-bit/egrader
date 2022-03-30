<template>
  <div id="enroll">
    <div class="enroll-area">
      <h1 style="text-align: left; margin-left: 20px; margin-top: 40px">欢迎注册!</h1>
      <p style="text-align: left; margin-left: 20px">
        已有账号？
        <span @click="$router.push('/')" style="color: #0052d9;">登录</span>
      </p>
      <div class="enroll-input-area" style="margin-top: 40px">
        <t-form
            :data="formData"
            ref="form"
            @reset="onReset"
            @submit="onSubmit"
            :colon="true"
            class="t-form"
            size="large"
            labelWidth="70px"
        >
          <t-form-item name='email' class="enroll-form-item" label="邮箱">
            <t-input clearable v-model="formData.email" placeholder="请输入邮箱">
            </t-input>
          </t-form-item>
          <t-form-item name='name' class="enroll-form-item" label="昵称">
            <t-input clearable v-model="formData.name" placeholder="请输入昵称">
            </t-input>
          </t-form-item>
          <t-form-item name='password' class="enroll-form-item" label="密码">
            <t-input type="password" clearable v-model="formData.password" placeholder="请输入密码">
            </t-input>
          </t-form-item>
          <t-form-item name='password_confirmed' class="enroll-form-item" label="确认密码">
            <t-input type="password" clearable v-model="formData.password_confirmed" placeholder="请再次输入密码">
            </t-input>
          </t-form-item>
          <t-form-item name='verify_code' class="enroll-form-item" label="验证码">
            <t-input clearable v-model="formData.verify_code" placeholder="请输入验证码">
            </t-input>
            <t-button theme="default" variant="outline" style="margin-left: 10px" @click="sendVerifyCode()" :disabled="get_verify_code_disabled">
              {{s_code_button_text}}
            </t-button>
          </t-form-item>
          <t-button theme="primary" type="submit" block style="margin-left: 60px; margin-right: 60px; margin-top: 70px; width: 75%">注册</t-button>
        </t-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import md5 from "md5";

export default {
  name: "Enroll",
  data() {
    return {
      formData: {
        email: '',
        password: '',
        name: '',
        password_confirmed: '',
        verify_code: '',
      },
      get_verify_code_disabled: false,
      s_code_button_text: "获取验证码",
      time: 60
    }
  },
  methods: {

    onReset() {
      this.$message.success('重置成功');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        axios
        .post('https://1862232491914219.cn-chengdu.fc.aliyuncs.com/2016-08-15/proxy/login.LATEST/register/',
            {
              email: this.formData.email,
              password: md5(this.formData.password),
              name: this.formData.name,
              auth_code: this.formData.verify_code,
            })
        .then( resp => {
          console.log(resp);
          this.$message.success('注册成功！即将跳转登录界面')
        })
        .catch( err => {
          console.log(err)
          this.$message.error('注册失败！')
        })
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    sendVerifyCode() {
      if (this.$data.formData.email.length < 1) {
        this.$message.error('未输入邮箱！无法发送验证码')
      }
      this.$data.get_verify_code_disabled = false
      let me = this
      me.get_verify_code_disabled = true
      let interval = window.setInterval(function() {
        me.s_code_button_text = + me.time
        --me.time
        if(me.time < 0) {
          me.s_code_button_text = "重新发送"
          me.time = 60
          me.get_verify_code_disabled = false
          window.clearInterval(interval)
        }
      }, 1000)
      axios
      .post('https://1862232491914219.cn-chengdu.fc.aliyuncs.com/2016-08-15/proxy/login.LATEST/send-email/',
          {
              email: this.formData.email
          }
          )
      .then( resp => {
        console.log(resp)
        this.$message.success('发送验证码成功')
      })
      .catch( err=> {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
#enroll {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(112.5deg, rgba(232, 232, 232, 0.03) 0%, rgba(232, 232, 232, 0.03) 2%,rgba(231, 231, 231, 0.03) 2%, rgba(231, 231, 231, 0.03) 4%,rgba(231, 231, 231, 0.03) 4%, rgba(231, 231, 231, 0.03) 11%,rgba(2, 2, 2, 0.03) 11%, rgba(2, 2, 2, 0.03) 67%,rgba(231, 231, 231, 0.03) 67%, rgba(231, 231, 231, 0.03) 90%,rgba(111, 111, 111, 0.03) 90%, rgba(111, 111, 111, 0.03) 100%),linear-gradient(157.5deg, rgba(210, 210, 210, 0.03) 0%, rgba(210, 210, 210, 0.03) 17%,rgba(254, 254, 254, 0.03) 17%, rgba(254, 254, 254, 0.03) 18%,rgba(96, 96, 96, 0.03) 18%, rgba(96, 96, 96, 0.03) 44%,rgba(159, 159, 159, 0.03) 44%, rgba(159, 159, 159, 0.03) 70%,rgba(24, 24, 24, 0.03) 70%, rgba(24, 24, 24, 0.03) 82%,rgba(16, 16, 16, 0.03) 82%, rgba(16, 16, 16, 0.03) 100%),linear-gradient(22.5deg, rgba(47, 47, 47, 0.03) 0%, rgba(47, 47, 47, 0.03) 32%,rgba(124, 124, 124, 0.03) 32%, rgba(124, 124, 124, 0.03) 40%,rgba(200, 200, 200, 0.03) 40%, rgba(200, 200, 200, 0.03) 42%,rgba(16, 16, 16, 0.03) 42%, rgba(16, 16, 16, 0.03) 64%,rgba(243, 243, 243, 0.03) 64%, rgba(243, 243, 243, 0.03) 94%,rgba(93, 93, 93, 0.03) 94%, rgba(93, 93, 93, 0.03) 100%),linear-gradient(90deg, #ffffff,#ffffff);
  .enroll-area {
    position: absolute;
    width: 480px;
    height: 560px;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.5);
    overflow: hidden;

    .enroll-input-area {

      .t-form {
        margin-top: 30px;

        .enroll-form-item {
          margin-left: 20px;
          margin-right: 20px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>