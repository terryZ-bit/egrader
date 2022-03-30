<template>
  <div id="index">
    <t-layout style="width: 100%; height: 100%">
      <t-header>
        <home-page-header/>
      </t-header>

      <t-layout>
        <t-aside>
          <t-menu theme="light" defaultValue="survey" style="margin-right: 40px" height="550px" >
            <t-menu-item value="survey">
              <template #icon>
                <icon name="dashboard"/>
              </template>
              概览
            </t-menu-item>
            <t-menu-item value="resource">
              <template #icon>
                <icon name="server"/>
              </template>
              资源列表
            </t-menu-item>
            <t-menu-item value="root">
              <template #icon>
                <icon name="root-list"/>
              </template>
              根目录
            </t-menu-item>
            <t-menu-item value="control-platform">
              <template #icon>
                <icon name="control-platform"/>
              </template>
              调度平台
            </t-menu-item>
            <t-menu-item value="precise-monitor">
              <template #icon>
                <icon name="precise-monitor"/>
              </template>
              精准监控
            </t-menu-item>
            <t-menu-item value="mail">
              <template #icon>
                <icon name="mail"/>
              </template>
              消息区
            </t-menu-item>
            <t-menu-item value="user-circle">
              <template #icon>
                <icon name="user-circle"/>
              </template>
              个人中心
            </t-menu-item>
            <t-menu-item value="play-circle">
              <template #icon>
                <icon name="play-circle"/>
              </template>
              视频区
            </t-menu-item>
            <t-menu-item value="edit1">
              <template #icon>
                <icon name="edit-1"/>
              </template>
              资源编辑
            </t-menu-item>
          </t-menu>
        </t-aside>

        <t-content>
          <div class="survey-area" v-if="show_area === 'survey'">
            概览页
          </div>
        </t-content>
      </t-layout>

    </t-layout>
  </div>
</template>

<script>
import HomePageHeader from "@/components/header/HomePageHeader";
import { Icon } from 'tdesign-icons-vue';
export default {
  name: "index",
  components: {HomePageHeader, Icon},
  data() {
    return {
      show_area: "",
    }
  },
  methods: {
    changeHandler(active) {
      console.log('change', active);
    },
  },
}
</script>

<style lang="less" scoped>
#index {
  height: 100%;
  width: 100%;
}
</style>