<template>
  <div id="role-choose">
    <t-drawer :visible.sync="drawer_visible"  :closeBtn="true" header="新建角色"
              size="medium">
      <template v-if="drawer_type === 'stu'">
        <div class="drawer-new-role-inputs">
          <div>
            <span style="text-align: left; float: left; margin-top: 10px; margin-bottom: 10px">姓名</span>
            <t-input placeholder="请输入姓名"></t-input>
          </div>
        </div>
      </template>
      <template v-else-if="drawer_type === 'tutor'">
        <div class="drawer-new-role-inputs">
          <div>
            <span style="text-align: left; float: left; margin-top: 10px; margin-bottom: 10px">教师</span>
            <t-input placeholder="请输入教师"></t-input>
          </div>
        </div>
      </template>
    </t-drawer>
    <t-layout style="height: 100%; width: 100%">
      <t-header>
        <home-page-header></home-page-header>
      </t-header>

      <t-content class="role-choose-main-area">
        <p style="font-size: 25px; text-align: left; padding-left: 60px; margin-top: 40px">选择一个角色登入 或者
          <span style="color: #0052d9">新建角色</span>
        </p>
        <div class="choose-role-content">
          <div class="student-list-content">
            <div>
              <p style="font-size: 25px; color: #1036a4; text-align: left; margin: 0 0 0 30px;">学生</p>
            </div>
            <div v-for="stu in student_list" :key="stu.id">
              <t-button theme="default" variant="outline" style="width: 80%; margin-top: 30px" @click="roleLogin(stu)">{{stu.name}}</t-button>
            </div>
            <div>
              <t-button  style="width: 80%; margin-top: 30px;" @click="drawerOpen('stu')"><add-icon slot="icon"/>新建角色</t-button>
            </div>
          </div>
          <div class="teacher-list-content">
            <div>
              <p style="font-size: 25px; color: #d03131; text-align: left; margin: 0 0 0 30px;">教师</p>
            </div>
            <div v-for="teacher in teacher_list" :key="teacher.id">
              <t-button theme="default" variant="outline" style="width: 80%; margin-top: 30px" @click="roleLogin(teacher)">{{teacher.name}}</t-button>
            </div>
            <div>
              <t-button style="width: 80%; margin-top: 30px;" @click="drawerOpen('teacher')"><add-icon slot="icon"/>新建角色</t-button>
            </div>
          </div>
          <div class="tutor-list-content">
            <div>
              <p style="font-size: 25px; margin: 0 0 0 30px; color: #5d79c2; text-align: left">助教</p>
            </div>
            <div v-for="tutor in tutor_list" :key="tutor.id">
              <t-button theme="default" variant="outline" style="width: 80%; margin-top: 30px" @click="roleLogin(tutor)">{{tutor.name}}</t-button>
            </div>
            <div>
              <t-button style="width: 80%; margin-top: 30px;" @click="drawerOpen('tutor')"><add-icon slot="icon"/>新建角色</t-button>
            </div>
          </div>
        </div>
      </t-content>
    </t-layout>
  </div>
</template>

<script>
import axios from "axios";
import HomePageHeader from "@/components/header/HomePageHeader";
import {AddIcon} from "tdesign-icons-vue";

export default {
  name: "RoleChoose",
  components: {HomePageHeader, AddIcon},
  data() {
    return {
      student_list: [
        {id: 1, name: "学生1"},
        {id: 2, name: "学生1"},
        {id: 3, name: "学生1"},
        {id: 4, name: "学生1"},
      ],
      teacher_list: [
        {id: 1, name: "教师1"},
        {id: 2, name: "教师1"},
        {id: 3, name: "学生1"},
        {id: 4, name: "学生1"},
      ],
      tutor_list: [
        {id: 1, name: "助教1"},
        {id: 2, name: "学生1"},
        {id: 3, name: "学生1"},
        {id: 4, name: "学生1"},
      ],
      drawer_visible: false,
      drawer_type: ''
    }
  },
  mounted() {
    axios
    .post('', {})
    .then( resp => {
      console.log(resp)

    })
  },
  methods: {
    roleLogin(role) {
      this.$router.push('/index')
      axios
      .post('', {
        role: role
      })
      .then( resp => {
        console.log(resp)
      })
      .catch( err => {
        console.log(err)
      })
    },
    newRole() {
      this.drawer_visible = false
    },
    drawerClose() {

    },
    drawerOpen(role)  {
      console.log(role)
      this.drawer_type = role
      this.drawer_visible = true
    },
    drawerCancel() {
      this.drawer_visible = false
    }
  },
}
</script>

<style lang="less" scoped>
#role-choose {
  height: 100%;
  width: 100%;

  .role-choose-main-area {
    background-image: linear-gradient(112.5deg, rgba(232, 232, 232, 0.03) 0%, rgba(232, 232, 232, 0.03) 2%,rgba(231, 231, 231, 0.03) 2%, rgba(231, 231, 231, 0.03) 4%,rgba(231, 231, 231, 0.03) 4%, rgba(231, 231, 231, 0.03) 11%,rgba(2, 2, 2, 0.03) 11%, rgba(2, 2, 2, 0.03) 67%,rgba(231, 231, 231, 0.03) 67%, rgba(231, 231, 231, 0.03) 90%,rgba(111, 111, 111, 0.03) 90%, rgba(111, 111, 111, 0.03) 100%),linear-gradient(157.5deg, rgba(210, 210, 210, 0.03) 0%, rgba(210, 210, 210, 0.03) 17%,rgba(254, 254, 254, 0.03) 17%, rgba(254, 254, 254, 0.03) 18%,rgba(96, 96, 96, 0.03) 18%, rgba(96, 96, 96, 0.03) 44%,rgba(159, 159, 159, 0.03) 44%, rgba(159, 159, 159, 0.03) 70%,rgba(24, 24, 24, 0.03) 70%, rgba(24, 24, 24, 0.03) 82%,rgba(16, 16, 16, 0.03) 82%, rgba(16, 16, 16, 0.03) 100%),linear-gradient(22.5deg, rgba(47, 47, 47, 0.03) 0%, rgba(47, 47, 47, 0.03) 32%,rgba(124, 124, 124, 0.03) 32%, rgba(124, 124, 124, 0.03) 40%,rgba(200, 200, 200, 0.03) 40%, rgba(200, 200, 200, 0.03) 42%,rgba(16, 16, 16, 0.03) 42%, rgba(16, 16, 16, 0.03) 64%,rgba(243, 243, 243, 0.03) 64%, rgba(243, 243, 243, 0.03) 94%,rgba(93, 93, 93, 0.03) 94%, rgba(93, 93, 93, 0.03) 100%),linear-gradient(90deg, #ffffff,#ffffff);
  }


  .choose-role-content {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 50px;


    .student-list-content {
      width: 33%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-left: 30px;

    }
    .teacher-list-content {
      width: 33%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-left: 30px;
    }
    .tutor-list-content {
      width: 33%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-left: 30px;
    }
  }
}
</style>