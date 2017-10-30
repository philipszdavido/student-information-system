<template>
      <div class="row">
        <div class="col-md-3 col-lg-6">
                      <!-- Widget: user widget style 1 -->
          <div class="box box-widget widget-user">
            <!-- Add the bg color to the header using any of the bg-* classes -->
            <div class="widget-user-header bg-aqua-active">
              <h3 class="widget-user-username">{{student.name}}</h3>
              <h5 class="widget-user-desc">Student</h5>
            </div>
            <div class="widget-user-image">
              <img class="img-circle" :src="student.url" alt="User Avatar">
            </div>
            <div class="box-footer">
              <div class="row">
                <div class="col-sm-4 border-right">
                  <div class="description-block">
                    <h5 class="description-header">{{student.course}}</h5>
                    <span class="description-text">COURSE</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-sm-4 border-right">
                  <div class="description-block">
                    <h5 class="description-header">{{student.level}}</h5>
                    <span class="description-text">LEVEL</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-sm-4">
                  <div class="description-block">
                    <h5 class="description-header">{{student._id}}</h5>
                    <span class="description-text">REG. NO</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
              </div>
              <!-- /.row -->
              <router-link class="btn" :to="{name:'editStudent', params:{id: student._id}}" v-bind="student">Edit {{student.name}}</router-link>
              <a href="javascript:void(0);" class="btn pull-right" @click="deleteUser()" >Delete {{student.name}}</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <!-- About Me Box -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">About Me</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <strong><i class="fa fa-book margin-r-5"></i> Education</strong>

              <p class="text-muted">
                B.S. in Computer Science from the University of Tennessee at Knoxville
              </p>

              <hr>

              <strong><i class="fa fa-map-marker margin-r-5"></i> Location</strong>

              <p class="text-muted">Malibu, California</p>

              <hr>

              <strong><i class="fa fa-pencil margin-r-5"></i> Skills</strong>

              <p>
                <span class="label label-danger">UI Design</span>
                <span class="label label-success">Coding</span>
                <span class="label label-info">Javascript</span>
                <span class="label label-warning">PHP</span>
                <span class="label label-primary">Node.js</span>
              </p>

              <hr>

              <strong><i class="fa fa-file-text-o margin-r-5"></i> Notes</strong>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

        </div>
      </div>
</template>

<script>
import { set_selected_student, delete_student } from '../vuex/actions'
import axios from 'axios'

export default {
  name: 'viewStudent',
  data : function () {
    var route = this.$route;
    return {
      studen: route.params.id,
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
  methods: {
    deleteUser () {
        this.$swal({
        title: `You are deleting ${this.$store.state.selectedStudent.name}`,
        text: 'Continue?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return new Promise((resv, rej) => {
            axios.delete(this.data_url + '/api/students/' + this.$store.state.selectedStudent._id, this.$store.state.selectedStudent)
            .then((data) => {
              this.$store.dispatch('delete_student', this.$store.state.selectedStudent)
              this.$swal('Done','','success')
            })
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

<style></style>