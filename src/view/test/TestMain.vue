<template>
  <div id="test-main">
    <t-input placeholder="请输入要更改的值" v-model="input_path"></t-input>
    <t-button @click="savePath(input_path)">更改</t-button>
    <t-button @click="laterSave(input_path)">稍后更改</t-button>
    <p>{{state_path}}</p>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "TestMain",
  data() {
    return {
      input_path: '',
      state_path: ''
    }
  },

  mounted() {
    this.state_path =  this.getPath()
  },

  methods: {
    ...mapMutations({
      savePath: 'savePath'
    }),
    ...mapGetters(['getPath']),
    ...mapActions({
      laterSave: 'savePathLater'
    })
  },

  computed: {
    listPath(){
      return this.$store.state.path_name
    }
  },

  watch: {
    listPath(newVal) {
      this.state_path = newVal
    }
  }
}
</script>

<style lang="less" scoped>

</style>