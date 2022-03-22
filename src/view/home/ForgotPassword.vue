<template>
  <div id="forgot-password">
    <div class="forgot-password-area">
      <h1 style="text-align: left; margin-left: 20px; margin-top: 40px">通过邮箱</h1>
      <p style="text-align: left; margin-left: 20px">找回密码</p>
      <div class="reset-password-input-area" style="margin-top: 40px">
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
          <t-form-item name='email' class="reset-password-form-item" label="邮箱">
            <t-input clearable v-model="formData.email" placeholder="请输入邮箱">
            </t-input>
          </t-form-item>
          <t-form-item name='password' class="reset-password-form-item" label="密码">
            <t-input type="password" clearable v-model="formData.password" placeholder="请输入密码">
            </t-input>
          </t-form-item>
          <t-form-item name='password_confirmed' class="reset-password-form-item" label="确认密码">
            <t-input type="password" clearable v-model="formData.password_confirmed" placeholder="请再次输入密码">
            </t-input>
          </t-form-item>
          <t-form-item name='verify_code' class="reset-password-form-item" label="验证码">
            <t-input clearable v-model="formData.verify_code" placeholder="请输入验证码">
            </t-input>
            <t-button theme="default" variant="outline" style="margin-left: 10px">
              获取验证码
            </t-button>
          </t-form-item>
          <t-button theme="primary" type="submit" block style="margin-left: 60px; margin-right: 60px; margin-top: 70px; width: 75%">注册</t-button>
        </t-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data () {
    return {
      formData: {}
    }
  },
  methods: {
    onReset() {
      this.$message.success('重置成功');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('提交成功');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
  }
}
</script>

<style lang="less" scoped>
#forgot-password {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(112.5deg, rgba(232, 232, 232, 0.03) 0%, rgba(232, 232, 232, 0.03) 2%,rgba(231, 231, 231, 0.03) 2%, rgba(231, 231, 231, 0.03) 4%,rgba(231, 231, 231, 0.03) 4%, rgba(231, 231, 231, 0.03) 11%,rgba(2, 2, 2, 0.03) 11%, rgba(2, 2, 2, 0.03) 67%,rgba(231, 231, 231, 0.03) 67%, rgba(231, 231, 231, 0.03) 90%,rgba(111, 111, 111, 0.03) 90%, rgba(111, 111, 111, 0.03) 100%),linear-gradient(157.5deg, rgba(210, 210, 210, 0.03) 0%, rgba(210, 210, 210, 0.03) 17%,rgba(254, 254, 254, 0.03) 17%, rgba(254, 254, 254, 0.03) 18%,rgba(96, 96, 96, 0.03) 18%, rgba(96, 96, 96, 0.03) 44%,rgba(159, 159, 159, 0.03) 44%, rgba(159, 159, 159, 0.03) 70%,rgba(24, 24, 24, 0.03) 70%, rgba(24, 24, 24, 0.03) 82%,rgba(16, 16, 16, 0.03) 82%, rgba(16, 16, 16, 0.03) 100%),linear-gradient(22.5deg, rgba(47, 47, 47, 0.03) 0%, rgba(47, 47, 47, 0.03) 32%,rgba(124, 124, 124, 0.03) 32%, rgba(124, 124, 124, 0.03) 40%,rgba(200, 200, 200, 0.03) 40%, rgba(200, 200, 200, 0.03) 42%,rgba(16, 16, 16, 0.03) 42%, rgba(16, 16, 16, 0.03) 64%,rgba(243, 243, 243, 0.03) 64%, rgba(243, 243, 243, 0.03) 94%,rgba(93, 93, 93, 0.03) 94%, rgba(93, 93, 93, 0.03) 100%),linear-gradient(90deg, #ffffff,#ffffff);
  .forgot-password-area {
    position: absolute;
    width: 480px;
    height: 480px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.5);
    overflow: hidden;

    .reset-password-input-area {

      .t-form {
        margin-top: 30px;

        .reset-password-form-item {
          margin-left: 20px;
          margin-right: 20px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>