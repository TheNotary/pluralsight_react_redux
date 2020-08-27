// This is an Action Creator function, it creates an action meant to be sent to a reducer
export function createCourse(course) {
    return { type: "CREATE_COURSE", course };
}