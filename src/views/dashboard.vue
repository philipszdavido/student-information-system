<template>
<div class="wrapper">
    <top></top>
    <sidebar></sidebar>
    <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Student's Information Resource
        <small>Control panel</small>
      </h1>
    </section>
    <section class="content">
    <router-view></router-view>
    </section>
    </div>
    <bottom></bottom>
</div>
</template>

<script>
import Bottom from '@/components/footer'
import Sidebar from '@/components/sidemenu'
import Top from '@/components/header'

export default {
    name: 'dashboard',
    components: {
        Sidebar,
        Top,
        Bottom
    },
    computed: {
      students () {
        return this.$store.state.students
      }
    }
}
</script>

<style>

</style>
