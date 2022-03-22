<template>
  <div id="login">
    登录页面
    <t-button @click="pushToTest">点击进入测试界面</t-button>
  </div>
</template>

<script>
export default {
  name: "login.vue",
  methods: {
    pushToTest() {
      this.$router.push('/testMain')
    }
  },
}
</script>

<style scoped>

</style>