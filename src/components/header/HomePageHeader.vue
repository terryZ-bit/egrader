<template>
  <div id="home-page-header">
    <div class="logo-area" style=" text-align: center; display: flex; align-items: center">
      <img src="../../assets/logo/img.png" alt="404" style="height: 40px; width: 120px;margin-left: 30px"/>
    </div>
    <div class="navigation-area">
      <t-button theme="default" variant="text">课程列表</t-button>
    </div>
    <div class="sign-up-area" style="margin-left: 20px">
      <t-button theme="default" size="medium" variant="text">
        {{username}}
      </t-button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
export default {
  name: "HomePageHeader",
  components: {
  },
  data () {
    return {
      header_login_flag: false,
      username: ""
    }
  },

  methods: {
    ...mapGetters(['getUsername'])
  },

  computed: {
    usernameComp() {
      return this.$store.state.username;
    }
  },

  watch: {
    usernameComp: {
      immediate: true,
      handler: function (newVal) {
        this.username = newVal
      }
    }
  }
}
</script>

<style lang="less" scoped>
#home-page-header {
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