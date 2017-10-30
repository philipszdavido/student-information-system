<template>
            <!-- general form elements -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Quick Scaffold New Student</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
              <div class="box-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" class="form-control" v-model="username" id="exampleInputEmail1" placeholder="Enter Student's Name">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Course</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" v-model="course" placeholder="Enter Course">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Level</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" v-model="level" placeholder="Enter Student's Level">
                </div>
                <div class="form-group">
                  <label for="exampleInputFile">Select Avatar</label>
                  <input type="file" id="exampleInputFile" v-on:change="preview($event.target.files)">

                  <p class="help-block">
                    <img src id="previewImg">
                  </p>
                </div>
              </div>
              <!-- /.box-body -->

              <div class="box-footer">
                <button @click="saveStudent()" class="btn btn-primary">Submit</button>
              </div>
          </div>
          <!-- /.box -->
</template>

<script>
import { add_student } from '../vuex/actions'
import axios from 'axios'

export default {
  name: 'createStudent',
  data: function() {
    return {
      username: '',
      level: '',
      course: '',
      image: null,
      data_url: process.env.NODE_ENV === 'production' ? "" : "http://localhost:3003"
    }
  },
  methods: {
    saveStudent () {
      const formdata = new FormData()
      formdata.append('name', this.username)
      formdata.append('image', this.image)
      formdata.append('course', this.course)
      formdata.append('level', this.level)
      this.$swal({
        title: `You are creating ${this.username}`,
        text: 'Continue?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return new Promise((resv, rej) => {
            axios.post(this.data_url + '/api/students', formdata)
            .then((data)=>{
              this.$store.dispatch('add_student', {name: this.username, course: this.course, level: this.level})
              this.$swal('Done','','success')
            })
          })
        }
      }).then(
        () => {},
       (dismiss) => {
        if(dismiss == 'cancel')
          this.$swal('Cancelled','','error')
      })
    },
    preview (file) {
      this.image = file[0]
      var filereader = new FileReader()
      filereader.onload = (e) => {
        document.getElementById('previewImg').src = e.target.result
      }
      filereader.readAsDataURL(file[0])
    }
  }
}
</script>

<style>

</style>
