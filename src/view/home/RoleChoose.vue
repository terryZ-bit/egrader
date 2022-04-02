<template>
  <div id="role-choose">
    <t-drawer :visible.sync="drawer_visible"  :closeBtn="true" :header="drawer_type === 'stu' ? '加入课程': '新建课程'"
              size="medium" :placement="drawer_place" :sizeDraggable="true">
      <template v-if="drawer_type === 'stu'">
        <div class="drawer-new-role-inputs">
          <div>
            <span style="text-align: left; float: left; margin-top: 10px; margin-bottom: 10px">姓名</span>
            <t-input placeholder="请输入姓名"></t-input>
          </div>
        </div>
      </template>
      <template v-else-if="drawer_type === 'teacher'">
        <div class="drawer-new-role-inputs">
          <div>
            <t-form :data="drawer_new_course_form" ref="form" @reset="onReset" @submit="onSubmit" :colon="true">
              <t-form-item label="课程名" name="course_name">
                <t-input v-model="drawer_new_course_form.course_name" placeholder="请输入课程名"></t-input>
              </t-form-item>
              <t-form-item label="课程简介" name="course_introduction">
                <t-textarea v-model="drawer_new_course_form.course_introduction" placeholder="请输入课程简介">
                </t-textarea>
              </t-form-item>
            </t-form>
          </div>
        </div>
      </template>
    </t-drawer>
    <t-layout style="height: 100%; width: 100%">
      <t-header>
        <home-page-header></home-page-header>
      </t-header>

      <t-content class="role-course-main-area">
        <p style="font-size: 25px; text-align: left; padding-left: 60px; margin-top: 40px">
          <span style="color: #0052d9">课程列表</span>
        </p>
        <div class="choose-course-content">
          <div class="join-in-course-content">
            <div>
              <p style="font-size: 25px; text-align: left; margin: 0 0 0 30px;">我加入的课程</p>
            </div>
            <div v-for="stu in student_list" :key="stu.id">
              <t-button theme="default" variant="outline" style="width: 80%; margin-top: 30px" @click="roleLogin(stu)">{{stu.name}}</t-button>
            </div>
            <div>
              <t-button  style="width: 80%; margin-top: 30px;" @click="drawerOpen('stu')"><swap-right-icon slot="icon"/>加入课程</t-button>
            </div>
          </div>
          <div class="create-course-content">
            <div>
              <p style="font-size: 25px; text-align: left; margin: 0 0 0 30px;">我管理的课程</p>
            </div>
            <div v-for="teacher in teacher_list" :key="teacher.id">
              <t-button theme="default" variant="outline" style="width: 80%; margin-top: 30px" @click="roleLogin(teacher)">{{teacher.name}}</t-button>
            </div>
            <div>
              <t-button style="width: 80%; margin-top: 30px;" @click="drawerOpen('teacher')"><add-icon slot="icon"/>新建课程</t-button>
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
import {AddIcon, SwapRightIcon} from "tdesign-icons-vue";

export default {
  name: "RoleChoose",
  components: {HomePageHeader, AddIcon, SwapRightIcon},
  data() {
    return {
      student_list: [
        {id: 1, name: "课程1"},
        {id: 2, name: "课程2"},
        {id: 3, name: "课程3"},
        {id: 4, name: "课程4"},
      ],
      teacher_list: [
        {id: 1, name: "课程1"},
        {id: 2, name: "课程2"},
        {id: 3, name: "课程3"},
      ],
      drawer_visible: false,
      drawer_type: '',
      drawer_place: 'right',
      drawer_new_course_form: {
        course_name: "",
        course_introduction: ""
      }
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
      this.drawer_place = (role === 'stu' ? 'left' : 'right')
    },
    onReset() {

    },
    onSubmit() {

    }
  },
}
</script>

<style lang="less" scoped>
#role-choose {
  height: 100%;
  width: 100%;

  .role-course-main-area {
    background-image: linear-gradient(112.5deg, rgba(232, 232, 232, 0.03) 0%, rgba(232, 232, 232, 0.03) 2%,rgba(231, 231, 231, 0.03) 2%, rgba(231, 231, 231, 0.03) 4%,rgba(231, 231, 231, 0.03) 4%, rgba(231, 231, 231, 0.03) 11%,rgba(2, 2, 2, 0.03) 11%, rgba(2, 2, 2, 0.03) 67%,rgba(231, 231, 231, 0.03) 67%, rgba(231, 231, 231, 0.03) 90%,rgba(111, 111, 111, 0.03) 90%, rgba(111, 111, 111, 0.03) 100%),linear-gradient(157.5deg, rgba(210, 210, 210, 0.03) 0%, rgba(210, 210, 210, 0.03) 17%,rgba(254, 254, 254, 0.03) 17%, rgba(254, 254, 254, 0.03) 18%,rgba(96, 96, 96, 0.03) 18%, rgba(96, 96, 96, 0.03) 44%,rgba(159, 159, 159, 0.03) 44%, rgba(159, 159, 159, 0.03) 70%,rgba(24, 24, 24, 0.03) 70%, rgba(24, 24, 24, 0.03) 82%,rgba(16, 16, 16, 0.03) 82%, rgba(16, 16, 16, 0.03) 100%),linear-gradient(22.5deg, rgba(47, 47, 47, 0.03) 0%, rgba(47, 47, 47, 0.03) 32%,rgba(124, 124, 124, 0.03) 32%, rgba(124, 124, 124, 0.03) 40%,rgba(200, 200, 200, 0.03) 40%, rgba(200, 200, 200, 0.03) 42%,rgba(16, 16, 16, 0.03) 42%, rgba(16, 16, 16, 0.03) 64%,rgba(243, 243, 243, 0.03) 64%, rgba(243, 243, 243, 0.03) 94%,rgba(93, 93, 93, 0.03) 94%, rgba(93, 93, 93, 0.03) 100%),linear-gradient(90deg, #ffffff,#ffffff);
  }


  .choose-course-content {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 50px;


    .join-in-course-content {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-left: 30px;

    }
    .create-course-content {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-left: 30px;
    }
  }
}
</style>