const mutations = {
    ADD_STUDENT(state, student) {
        state.students.push(student)
    },
    ADD_STUDENTS(state, students) {
        state.students = students
    },
    EDIT_STUDENT(state, student) {
        state.selectedStudent = student
    },
    DELETE_STUDENT(state, student) {
        state.students.filter((ele, index, arr) => {
            return ele._id != student._id
        })
    },
    SET_SELECTED_STUDENT(state, student) {
        state.students.forEach(function(element, index) {
            if (element._id == student) {
                state.selectedStudent = element
            }
        }, this);
    }
}

export default mutations