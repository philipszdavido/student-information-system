export const add_student = ({ commit }, student) => {
    commit('ADD_STUDENT', student);
}
export const add_students = ({ commit }, students) => {
    commit('ADD_STUDENTS', students);
}
export const edit_student = ({ commit }, student) => {
    commit('EDIT_STUDENT', student)
}
export const delete_student = ({ commit }, student) => {
    commit('DELETE_STUDENT', student)
}
export const set_selected_student = ({ commit }, student) => {
    commit('SET_SELECTED_STUDENT', student)
}
export default {
    add_student,
    add_students,
    edit_student,
    delete_student,
    set_selected_student
}