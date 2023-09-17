export const reducer = (state, action) => {
    switch (action.type) {
        case "Profile_Name":
            return {
                ...state,
                Username: action.UpdatedName
            }
        case "Age":
            return {
                ...state,
                age: action.Age
            }
        case "Update_Age":
            return {
                ...state,
                age: state.age + +1
            }
        default:
            return state
    }
}