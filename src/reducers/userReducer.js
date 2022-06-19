const initialState = {
  users: [],
  selectedStudent: {},
  searchList: null,
};
const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_STUDENT": {
      const users = [...state.users, action.student];
      return { ...state, users };
    }

    case "DELTE_STUDENT": {
      const users = state.users.filter(
        (student) => student.idStudent !== action.id
      );
      return { ...state, users };
    }

    case "SELECT_STUDENT": {
      return { ...state, selectedStudent: action.user };
    }

    case "UPDATE_STUDENT": {
      const users = state.users.map((student) =>
        student.idStudent === action.id ? action.values : student
      );
      return {
        ...state,
        users,
        selectedStudent: {},
      };
    }
    case "SEARCH_STUDENT_NAME": {
      const searchList = state.users.filter((student) => {
        return (
          student.fullName
            .toLowerCase()
            .includes(action.searchValue.trim().toLowerCase()) ||
          student.fullName.includes(action.searchValue.trim())
        );
      });
      return { ...state, searchList };
    }

    case "GET_STUDENTLIST_FROM_LOCAL": {
      const storageList = localStorage.getItem("StudentList");
      if (storageList?.length) {
        const users = JSON.parse(storageList);
        return { ...state, users };
      }
      return state;
    }
    default:
      return state;
  }
};

export default userReducers;
