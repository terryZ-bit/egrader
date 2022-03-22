<template>
  <div id="role-choose">
    <t-layout style="height: 100%; width: 100%">
      <t-header>
        <public-header></public-header>
      </t-header>

      <t-content>
        <div class="choose-role-content">

        </div>
      </t-content>

      <t-footer>
        <public-footer>

        </public-footer>
      </t-footer>
    </t-layout>
  </div>
</template>

<script>
import PublicHeader from "@/components/header/PublicHeader";
import PublicFooter from "@/components/footer/PublicFooter";
export default {
  name: "RoleChoose",
  components: {PublicFooter, PublicHeader}
}
</script>

<style lang="less" scoped>
#role-choose {
  height: 100%;
  width: 100%;

  .choose-role-content {
    height: 100%;
    width: 100%;
  }
}
</style>