<template>
                  <!-- USERS LIST -->
              <div class="box box-danger">
                <div class="box-header with-border">
                  <h3 class="box-title">Latest Members</h3>

                  <div class="box-tools pull-right">
                    <span class="label label-danger">{{students.length}} New Member{{students.length > 1 ? 's' : ''}}</span>
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i>
                    </button>
                  </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body no-padding">
                  <ul class="users-list clearfix">
                    <li v-for="student in students">
                      <img :src="student.url" alt="User Image" v-bind="student">
                      <router-link class="users-list-name" :to="{name:'viewStudent', params:{id: student._id}}" v-bind="student">{{student.name}}</router-link>
                      <span class="users-list-date" v-bind="student">{{student.course}}</span>
                    </li>
                  </ul>
                  <!-- /.users-list -->
                </div>
                <!-- /.box-body -->
                <div class="box-footer text-center">
                </div>
                <!-- /.box-footer -->
              </div>

</template>

<script>
import { add_student, add_students } from '../vuex/actions'
import axios from 'axios'

export default {
  name: 'listStudents',
  computed: {
    students() {
      return this.$store.state.students
    }
  },
  mounted () {
    this.addSt()
  },
  data: function() {
    return {
      data_url: process.env.NODE_ENV === 'production' ? "" : "http://localhost:3003"
    }
  },
  methods: {
    addSt() {
      axios({method:'GET',url: this.data_url + '/api/students',data:''}).then((res)=>{
        this.$store.commit('ADD_STUDENTS', res.data)
      })
    }
  }
}
</script>

<style>

</style>
