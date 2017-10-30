<template>
            <!-- general form elements -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Quick Edit Student</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
              <div class="box-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Student's Name" v-model="username">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Course</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Course" v-model="course">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Level</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Student's Level" v-model="level">
                </div>
                <!--<div class="form-group">
                  <label for="exampleInputFile">Select Avatar</label>
                  <input type="file" id="exampleInputFile">

                  <p class="help-block"></p>
                </div>-->
              </div>
              <!-- /.box-body -->

              <div class="box-footer">
                <button @click="showConfirm()" class="btn btn-primary">Submit</button>
              </div>
          </div>
          <!-- /.box -->
</template>

<script>
import { set_selected_student, add_student, delete_student } from '../vuex/actions'
import axios from 'axios'

export default {
  name: 'editStudent',
    data: function() {
    return {
      username: this.$store.state.selectedStudent.name,
      level: this.$store.state.selectedStudent.level,
      course: this.$store.state.selectedStudent.course,
      data_url: process.env.NODE_ENV === 'production' ? "" : "http://localhost:3003"
    }
  },
  computed: {
    student() {
      return this.$store.state.selectedStudent
    }
  },
  mounted () {
    var route = this.$route;
    this.$store.commit('SET_SELECTED_STUDENT', route.params.id)
  },
  methods : {
    editUser () {
      axios.put(this.data_url + '/api/students/' + this.$store.state.selectedStudent._id,{name: this.username, course: this.course, level: this.level})
      .then((res)=> {
        this.$swal('Done','','success')
        this.$store.dispatch('delete_student', {
          _id: this.$store.state.selectedStudent._id,
          name: this.$store.state.selectedStudent.username, 
          course: this.$store.state.selectedStudent.course, 
          level: this.$store.state.selectedStudent.level
        })
        this.$store.dispatch('add_student', {
          _id: this.$store.state.selectedStudent._id,
          name: this.username, 
          course: this.course, 
          level: this.level
        })
      })
    },
    showConfirm () {
      this.$swal({
        title: `You are editing ${this.username}`,
        text: 'Continue?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return new Promise((resv, rej) => {
            this.editUser()
          })
        }
      }).then(() => {
      }, (dismiss) => {
        if(dismiss == 'cancel')
          this.$swal('Cancelled','','error')
      })
    }
  }
}
</script>

<style>

</style>
