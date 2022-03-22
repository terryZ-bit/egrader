<template>
  <div id="public-header">
    <div class="logo-area" style=" text-align: center; display: flex; align-items: center">
      <img src="../../assets/logo/img.png" alt="404" style="height: 40px; width: 120px;margin-left: 30px"/>
    </div>
    <div class="navigation-area">
      <t-button theme="default" variant="text">功能</t-button>
      <t-button theme="default" variant="text">团队介绍</t-button>
      <t-button theme="default" variant="text">官方微博</t-button>
    </div>
    <div class="sign-up-area" style="margin-left: 20px">
      <t-button theme="primary" size="small">
        登录
      </t-button>
      <t-button theme="primary" style="margin-left: 20px" size="small">
        注册
      </t-button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
export default {
  name: "PublicHeader",
  components: {
  },
  data () {
    return {
      header_login_flag: false,
    }
  }
}
</script>

<style lang="less" scoped>
#public-header {
  display: flex;
  height: 100%;
  width: 100%;
}
.logo-area {
  height: 100%;
  width: 20%;
}

.navigation-area {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>