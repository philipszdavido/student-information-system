<template>
    <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="/static/img/stock/user4-128x128.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Chidume Nnamdi</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
        <li class="active">
          <router-link to="/home">
            <i class="fa fa-user"></i> <span>Students</span>
          </router-link>
        </li>
        <li>
          <router-link to="/create">
            <i class="fa fa-user-plus"></i> <span>Create New Student</span>
          </router-link>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>

</template>

<script>
export default {
name : 'sidemenu'
}
</script>

<style>

</style>

