import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import full from '@/container/full';
import dashboard from '@/views/dashboard';
import listStudents from '../views/list_students';
import createStudent from '../views/create_student';
import editStudent from '../views/edit_student';
import viewStudent from '../views/view_student';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        name: 'Dashboard',
        redirect: '/home',
        component: dashboard,
        children: [{
                path: 'home',
                name: 'listStudents',
                component: listStudents
            },
            {
                path: 'edit/:id',
                component: editStudent,
                name: 'editStudent'
            },
            {
                path: 'create',
                name: 'createStudent',
                component: createStudent
            },
            {
                path: 'view/:id',
                name: 'viewStudent',
                component: viewStudent
            }
        ]
    }]
})