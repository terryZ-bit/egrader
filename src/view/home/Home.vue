<template>
  <div id="home">
      <t-layout style="height: 100%;width: 100%;">
        <t-header>
          <public-header></public-header>
        </t-header>

        <t-content>
          <div class="slogan-area">
            <h1 style="text-align: left; font-size: 32px">你的第一个助教系统</h1>
            <p style="font-size: 20px; text-align: left; margin-top: 100px">必须是
              <span style="color: #0052d9; font-size: 32px; font-family: 微軟正黑體,serif">云助教</span>
            </p>
          </div>
          <div class="home-page-main">
            <div class="login-form" style="margin-top: 60px">
              <p style="display: block; width: 100%; text-align: left;font-size: x-large; font-weight: bold; margin-left: 10px">欢迎回来！</p>
              <p style="display: block; width: 100%; text-align: left;font-size: larger; font-weight: bold; margin-left: 10px; margin-bottom: 30px">
                请先
                <span style="color: #0052d9">
                  登录
                </span>
              </p>
              <t-form
                  :data="formData"
                  ref="form"
                  @reset="onReset"
                  @submit="onSubmit"
                  :colon="true"
                  :labelWidth="0"
              >
                <t-form-item name='account' style="margin: 10px 10px 20px;">
                  <t-input clearable v-model="formData.account" placeholder="请输入账户名">
                    <desktop-icon slot="prefix-icon"></desktop-icon>
                  </t-input>
                </t-form-item>
                <t-form-item name='password' style="margin: 10px 10px 20px;">
                  <t-input type="password" clearable v-model="formData.password" placeholder="请输入密码">
                    <lock-on-icon slot="prefix-icon"></lock-on-icon>
                  </t-input>
                </t-form-item>
                <t-form-item style="padding-top: 8px; margin: 10px">
                  <t-button theme="primary" type="submit" block :loading="login_btn_loading">登录</t-button>
                </t-form-item>
              </t-form>
              <div class="sign-in-check-area">
                <t-button theme="primary" variant="text" @click="$router.push('/Enroll')">注册</t-button>
                <t-button theme="primary" variant="text" @click="$router.push('/ForgotPassword')">忘记密码？</t-button>
              </div>
            </div>

          </div>

        </t-content>

        <t-footer>
          <public-footer></public-footer>
        </t-footer>
      </t-layout>
  </div>
</template>

<script>
import PublicHeader from "@/components/header/PublicHeader";
import PublicFooter from "@/components/footer/PublicFooter";
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue';
import axios from "axios";
import md5 from "md5";
const INITIAL_DATA = {
  account: '',
  password: '',
};
export default {
  name: "home",
  components: {PublicFooter, PublicHeader, DesktopIcon, LockOnIcon},
  data() {
    return {
      formData: { ...INITIAL_DATA },
      login_btn_loading: false
    };
  },

  methods: {
    onReset() {
      this.$message.success('重置成功');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.login_btn_loading = true
        axios
        .post('https://1862232491914219.cn-chengdu.fc.aliyuncs.com/2016-08-15/proxy/login.LATEST/login/'
        , {
              email: this.formData.account,
              password: md5(this.formData.password) ,
            })
        .then(resp => {
          console.log(resp)
          this.$message.success('登陆成功')
          this.login_btn_loading = false
          this.$router.push('/roleChoose')
        })
        .catch(err => {
          console.log(err)
          this.$message.error('登录失败！请检查用户名或者密码！')
          this.login_btn_loading = false
        })
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
  },
}
</script>

<style lang="less" scoped>
#home {
  height: 100%;
  width: 100%;


  .t-layout {
    background-image: linear-gradient(112.5deg, rgba(232, 232, 232, 0.03) 0%, rgba(232, 232, 232, 0.03) 2%,rgba(231, 231, 231, 0.03) 2%, rgba(231, 231, 231, 0.03) 4%,rgba(231, 231, 231, 0.03) 4%, rgba(231, 231, 231, 0.03) 11%,rgba(2, 2, 2, 0.03) 11%, rgba(2, 2, 2, 0.03) 67%,rgba(231, 231, 231, 0.03) 67%, rgba(231, 231, 231, 0.03) 90%,rgba(111, 111, 111, 0.03) 90%, rgba(111, 111, 111, 0.03) 100%),linear-gradient(157.5deg, rgba(210, 210, 210, 0.03) 0%, rgba(210, 210, 210, 0.03) 17%,rgba(254, 254, 254, 0.03) 17%, rgba(254, 254, 254, 0.03) 18%,rgba(96, 96, 96, 0.03) 18%, rgba(96, 96, 96, 0.03) 44%,rgba(159, 159, 159, 0.03) 44%, rgba(159, 159, 159, 0.03) 70%,rgba(24, 24, 24, 0.03) 70%, rgba(24, 24, 24, 0.03) 82%,rgba(16, 16, 16, 0.03) 82%, rgba(16, 16, 16, 0.03) 100%),linear-gradient(22.5deg, rgba(47, 47, 47, 0.03) 0%, rgba(47, 47, 47, 0.03) 32%,rgba(124, 124, 124, 0.03) 32%, rgba(124, 124, 124, 0.03) 40%,rgba(200, 200, 200, 0.03) 40%, rgba(200, 200, 200, 0.03) 42%,rgba(16, 16, 16, 0.03) 42%, rgba(16, 16, 16, 0.03) 64%,rgba(243, 243, 243, 0.03) 64%, rgba(243, 243, 243, 0.03) 94%,rgba(93, 93, 93, 0.03) 94%, rgba(93, 93, 93, 0.03) 100%),linear-gradient(90deg, #ffffff,#ffffff);
    background-repeat: no-repeat;
  }

  .slogan-area {
    position: absolute;
    height: 400px;
    width: 300px;
    top: 30%;
    left: 10%;
  }

  .home-page-main {
    position: absolute;
    height: 400px;
    width: 300px;
    color: #2c3e50;
    background-color: rgba(255,255,255,20%);
    border-radius: 10%;
    top: 20%;
    overflow: hidden;
    left: 70%;

    .sign-in-check-area {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

</style>